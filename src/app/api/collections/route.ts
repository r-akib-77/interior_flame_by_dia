import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import { MOCK_PRODUCTS } from '@/mockData';

export const runtime = "edge";

let isTableChecked = false;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function ensureTableExists(db: any) {
  if (isTableChecked || !db || typeof db.prepare !== 'function') return;
  try {
    await db.prepare(`
      CREATE TABLE IF NOT EXISTS collections (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        price TEXT NOT NULL,
        description TEXT,
        image TEXT NOT NULL,
        images TEXT,
        category TEXT DEFAULT '',
        style TEXT DEFAULT '[]',
        fabrics TEXT DEFAULT '[]',
        type TEXT DEFAULT '',
        stitchType TEXT DEFAULT '',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `).run();
    isTableChecked = true;
  } catch (err) {
    console.error("Auto-table initialization notice:", err);
  }
}

// Helper to handle SQLite JSON array parsing
const parseJSON = (str: unknown): string[] => {
  if (Array.isArray(str)) return str as string[];
  if (!str || typeof str !== 'string') return [];
  try {
    const parsed = JSON.parse(str);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

async function checkAuth(req: Request): Promise<boolean> {
  const cookieHeader = req.headers.get("cookie");
  let token: string | undefined;

  if (cookieHeader) {
    const match = cookieHeader.match(/admin_token=([^;]+)/);
    if (match) token = match[1];
  }

  if (!token) {
    const authHeader = req.headers.get("authorization");
    if (authHeader) {
      token = authHeader.replace(/^Bearer\s+/i, '');
      if (token === (process.env.ADMIN_PASSWORD || 'admin123')) return true;
    }
  }

  if (!token) return false;

  const payload = await verifyToken(token);
  return !!payload;
}

export async function GET() {
  try {
    const db = process.env.DB;
    
    if (!db || typeof db.prepare !== 'function') {
      console.warn("Cloudflare D1 Database binding 'DB' not found. Returning local fallback data.");
      return NextResponse.json(MOCK_PRODUCTS);
    }

    await ensureTableExists(db);

    const { results } = await db.prepare("SELECT * FROM collections ORDER BY created_at DESC").all();
    
    if (!results || results.length === 0) {
      return NextResponse.json([]);
    }

    const formatted = results.map((item: Record<string, unknown>) => ({
      ...item,
      category: item.category || item.type || '',
      images: parseJSON(item.images),
      style: parseJSON(item.style),
      fabrics: parseJSON(item.fabrics)
    }));
    
    return NextResponse.json(formatted);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("D1 Database Query Error:", error);
    return NextResponse.json({ error: "Failed to fetch collections from D1 database: " + message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  if (!(await checkAuth(req))) {
    return NextResponse.json({ error: 'Unauthorized. Please login to the admin panel.' }, { status: 401 });
  }
  
  try {
    const db = process.env.DB;
    if (!db || typeof db.prepare !== 'function') {
      return NextResponse.json({ 
        error: "Cloudflare D1 Database binding 'DB' is missing." 
      }, { status: 500 });
    }

    await ensureTableExists(db);

    const body = await req.json();
    const id = body.id || Date.now().toString();
    const { name, price, description, image, images, category, type } = body;

    const primaryImage = image || (Array.isArray(images) && images[0]) || '';
    const imagesList = Array.isArray(images) && images.length > 0 ? images : (primaryImage ? [primaryImage] : []);
    const catValue = category || type || '';

    await db.prepare(`
      INSERT INTO collections (id, name, price, description, image, images, category, type) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      id,
      name || 'Untitled Collection',
      String(price || '0'),
      description || '',
      primaryImage,
      JSON.stringify(imagesList),
      catValue,
      catValue
    ).run();

    return NextResponse.json({ 
      ...body, 
      id, 
      category: catValue,
      image: primaryImage, 
      images: imagesList 
    }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("D1 Database Insert Error:", error);
    return NextResponse.json({ error: 'Error saving item to database: ' + message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  if (!(await checkAuth(req))) {
    return NextResponse.json({ error: 'Unauthorized. Please login to the admin panel.' }, { status: 401 });
  }
  
  try {
    const db = process.env.DB;
    if (!db || typeof db.prepare !== 'function') {
      return NextResponse.json({ error: "Cloudflare D1 Database binding 'DB' is missing." }, { status: 500 });
    }

    await ensureTableExists(db);

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Missing product ID parameter' }, { status: 400 });
    }

    const body = await req.json();
    const { name, price, description, image, images, category, type } = body;
    
    const primaryImage = image || (Array.isArray(images) && images[0]) || '';
    const imagesList = Array.isArray(images) && images.length > 0 ? images : (primaryImage ? [primaryImage] : []);
    const catValue = category || type || '';

    await db.prepare(`
      UPDATE collections SET 
        name = ?, price = ?, description = ?, image = ?, images = ?, category = ?, type = ?
      WHERE id = ?
    `).bind(
      name || '',
      String(price || '0'),
      description || '',
      primaryImage,
      JSON.stringify(imagesList),
      catValue,
      catValue,
      id
    ).run();

    return NextResponse.json({ ...body, id, category: catValue, image: primaryImage, images: imagesList });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("D1 Database Update Error:", error);
    return NextResponse.json({ error: 'Error updating item in database: ' + message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  if (!(await checkAuth(req))) {
    return NextResponse.json({ error: 'Unauthorized. Please login to the admin panel.' }, { status: 401 });
  }
  
  try {
    const db = process.env.DB;
    if (!db || typeof db.prepare !== 'function') {
      return NextResponse.json({ error: "Cloudflare D1 Database binding 'DB' is missing." }, { status: 500 });
    }

    await ensureTableExists(db);

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Missing product ID parameter' }, { status: 400 });
    }

    await db.prepare("DELETE FROM collections WHERE id = ?").bind(id).run();
    return NextResponse.json({ success: true, id });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("D1 Database Delete Error:", error);
    return NextResponse.json({ error: 'Error deleting item from database: ' + message }, { status: 500 });
  }
}
