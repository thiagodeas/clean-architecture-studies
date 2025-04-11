import { JwtPayload } from "src/application/auth/interfaces/jwt-payload.interface";
import { JwtServiceInterface } from "src/application/auth/interfaces/jwt-service.interface";
import { TokenOptions } from "src/application/auth/interfaces/token-options.interface";
import { JwtService } from "@nestjs/jwt";
import { Injectable } from "@nestjs/common";

@Injectable()
export class JwtProvider implements JwtServiceInterface {
    constructor(private readonly jwtService: JwtService) {}

    generateToken(payload: JwtPayload, options?: TokenOptions): string {
        return this.jwtService.sign(payload, {
            secret: options?.secret,
            expiresIn: options?.expiresIn,
        });
    }

    validateToken(token: string): JwtPayload {
        return this.jwtService.verify(token, {
            secret: process.env.JWT_SECRET,
        });
    } 
}