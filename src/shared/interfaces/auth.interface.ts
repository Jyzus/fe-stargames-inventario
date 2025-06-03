import type { IPrivileges } from "./privileges.interface";
import type { IUser } from "./user.interface";

export interface IAuth extends ISession {
  user: IUser;
}

export interface ISession {
  token: string;
  privileges: IPrivileges;
}
