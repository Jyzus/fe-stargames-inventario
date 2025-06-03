import { ECookie } from "@enums/cookies.enum";
import { ELocalStorage } from "@enums/local-storage.enum";
import type { IAuth } from "@interfaces/auth.interface";
import { CookieLib } from "@libs/cookies.lib";

export const login = (auth: IAuth) => {
  const { privileges, token, user } = auth;

  localStorage.setItem(ELocalStorage.CURRENT_USER, JSON.stringify(user));
  CookieLib.set(ECookie.TOKEN, token);
  CookieLib.set(ECookie.PRIVILEGES, JSON.stringify(privileges));
};
