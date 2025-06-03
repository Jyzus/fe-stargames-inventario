import type { AstroCookies } from "astro";

export async function validateSession(cookies: AstroCookies) {
  const token = cookies.get("session")?.value;

  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    if (payload.exp && payload.exp < Date.now() / 1000) return null;
    return { user: payload };
  } catch (err) {
    return null;
  }
}
