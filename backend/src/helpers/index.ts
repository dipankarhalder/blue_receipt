import crypto from "crypto";
import { cookie_name } from "../utils/variablestatic";

export const random = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt: string, password: string) => {
  return crypto.createHmac('sha256', [salt, password].join('/')).update(cookie_name).digest('hex')
}