import { JwtPayload } from "./jwt-payload.interface";
import { TokenOptions } from "./token-options.interface";

export interface JwtServiceInterface {
    generateToken(payload: JwtPayload, options?: TokenOptions): string;
    validateToken(token: string): JwtPayload;
}