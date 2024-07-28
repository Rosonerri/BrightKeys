import { HTTP } from "./enums";

export interface iError{
    name: string
    message: string
    status: HTTP;
    success: boolean
}

export interface iUser {
  fullName: string;
  email: string;
  password: string;
  verify: boolean;
}