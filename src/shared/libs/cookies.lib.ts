import type { CookieOptions } from "@interfaces/cookies.interface";

export const CookieLib = {
  set(name: string, value: string, options: Partial<CookieOptions> = {}) {
    const {
      days = 7,
      path = "/",
      secure = true,
      sameSite = "Strict",
    } = options;

    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    const encodedValue = encodeURIComponent(value);

    document.cookie = `${name}=${encodedValue}; ${expires}; path=${path};${
      secure ? " Secure;" : ""
    } SameSite=${sameSite}`;
  },

  get(name: string): string | null {
    const cookies = document.cookie.split("; ");
    const found = cookies.find((row) => row.startsWith(`${name}=`));
    return found ? decodeURIComponent(found.split("=")[1]) : null;
  },

  delete(name: string, path = "/") {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};`;
  },

  getAll(): Record<string, string> {
    return document.cookie
      .split("; ")
      .map((cookie) => cookie.split("="))
      .reduce((acc, [key, val]) => {
        acc[key] = decodeURIComponent(val);
        return acc;
      }, {} as Record<string, string>);
  },
};
