import type { IAuth, ISession } from "src/shared/interfaces/auth.interface";
import type { IPrivileges } from "src/shared/interfaces/privileges.interface";
import type { AstroCookies } from "astro";

export const validateSession = (cookies: AstroCookies): ISession | null => {
  const token = cookies.get("token")?.value;
  const privilegesRaw = cookies.get("privileges")?.value;

  if (!token || !privilegesRaw) {
    return null;
  }

  const privileges = (JSON.parse(privilegesRaw) as IPrivileges) ?? [];

  return {
    privileges,
    token,
  };
};
