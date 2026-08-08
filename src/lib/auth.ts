import { SignJWT, jwtVerify } from "jose";

const getSecret = () => {
  const secretStr = process.env.JWT_SECRET || "fallback_default_jwt_secret_key_interior_flame";
  return new TextEncoder().encode(secretStr);
};

export async function createToken(payload: { username: string }) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("12h")
    .sign(getSecret());
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, getSecret());
    return payload;
  } catch {
    return null;
  }
}
