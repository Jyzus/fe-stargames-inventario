export interface CookieOptions {
  days?: number;
  path?: string;
  secure?: boolean;
  sameSite?: "Lax" | "Strict" | "None";
}
