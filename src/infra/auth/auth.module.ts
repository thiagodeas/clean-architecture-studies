import { Module } from "@nestjs/common";
import { JwtProvider } from "./jwt/jwt-provider";
import { UsersModule } from "../users/users.module";
import { AuthController } from "./controllers/auth.controller";
import { LoginUseCase } from "src/application/auth/use-cases/login.use-case";
import { JwtService } from "@nestjs/jwt";

@Module({
    imports: [UsersModule],
    controllers: [AuthController],
    providers: [LoginUseCase, JwtProvider, JwtService],
    exports: [],
})

export class AuthModule {}