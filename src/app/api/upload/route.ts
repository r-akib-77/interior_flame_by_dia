import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    let endpoint = process.env.R2_S3_ENDPOINT || "";
    const accessKeyId = process.env.R2_ACCESS_KEY_ID || "";
    const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY || "";
    let bucketName = process.env.R2_BUCKET_NAME || "";
    const publicUrlBase = process.env.R2_PUBLIC_URL || "";

    // Automatically clean endpoint if user passes endpoint with bucket path at the end
    if (endpoint.includes('.r2.cloudflarestorage.com/')) {
      const parts = endpoint.split('.r2.cloudflarestorage.com');
      const pathBucket = parts[1].replace(/^\/+|\/+$/g, '');
      if (pathBucket && !bucketName) {
        bucketName = pathBucket;
      }
      endpoint = parts[0] + '.r2.cloudflarestorage.com';
    } else {
      endpoint = endpoint.replace(/\/+$/, '');
    }

    if (!endpoint || !accessKeyId || !secretAccessKey || !bucketName) {
      console.error("Missing R2 S3 credentials in environment variables");
      return NextResponse.json(
        { error: "Cloudflare R2 storage configuration incomplete. Check .env file." },
        { status: 500 }
      );
    }

    const s3Client = new S3Client({
      region: "auto",
      endpoint: endpoint,
      credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
      },
    });

    const contentTypeHeader = req.headers.get("content-type") || "";
    const uploadedUrls: string[] = [];

    if (contentTypeHeader.includes("multipart/form-data")) {
      const formData = await req.formData();
      const files = [
        ...formData.getAll("files"),
        ...formData.getAll("file"),
      ].filter((f): f is File => f instanceof File);

      if (files.length === 0) {
        return NextResponse.json({ error: "No files provided in form data" }, { status: 400 });
      }

      for (const file of files) {
        const timestamp = Date.now();
        const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
        const filename = `${timestamp}-${safeName}`;
        const fileBuffer = await file.arrayBuffer();

        await s3Client.send(
          new PutObjectCommand({
            Bucket: bucketName,
            Key: filename,
            Body: new Uint8Array(fileBuffer),
            ContentType: file.type || "application/octet-stream",
          })
        );

        const url = publicUrlBase
          ? `${publicUrlBase.replace(/\/$/, "")}/${filename}`
          : `https://${bucketName}.${endpoint.split("://")[1]}/${filename}`;

        uploadedUrls.push(url);
      }
    } else {
      const rawFilename = req.headers.get("X-Filename") || `upload-${Date.now()}`;
      const contentType = req.headers.get("Content-Type") || "application/octet-stream";
      const arrayBuffer = await req.arrayBuffer();

      let safeFilename = decodeURIComponent(rawFilename).replace(/[^a-zA-Z0-9.-]/g, "_");
      if (!safeFilename.includes(".") && contentType.includes("/")) {
        const ext = contentType.split("/")[1];
        if (ext) safeFilename += `.${ext}`;
      }
      safeFilename = `${Date.now()}-${safeFilename}`;

      await s3Client.send(
        new PutObjectCommand({
          Bucket: bucketName,
          Key: safeFilename,
          Body: new Uint8Array(arrayBuffer),
          ContentType: contentType,
        })
      );

      const url = publicUrlBase
        ? `${publicUrlBase.replace(/\/$/, "")}/${safeFilename}`
        : `https://${bucketName}.${endpoint.split("://")[1]}/${safeFilename}`;

      uploadedUrls.push(url);
    }

    return NextResponse.json({
      success: true,
      url: uploadedUrls[0] || "",
      urls: uploadedUrls,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Error in Cloudflare R2 upload:", err);
    return NextResponse.json(
      { error: "Upload failed: " + message },
      { status: 500 }
    );
  }
}
