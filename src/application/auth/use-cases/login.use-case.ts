import { BadRequestException, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { UserRepository } from "src/domain/repositories/user.repository";
import { LoginUserDto } from "src/infra/auth/dto/login-user.dto";
import * as bcrypt from "bcrypt";
import { JwtProvider } from "src/infra/auth/jwt/jwt-provider";
import { JwtPayload } from "../interfaces/jwt-payload.interface";

@Injectable()
export class LoginUseCase {
    constructor (
        @Inject('UserRepository') private readonly userRepository: UserRepository,
        private readonly jwtProvider: JwtProvider,
    ) {}

    async execute(dto: LoginUserDto): Promise<string> {
        const user = await this.userRepository.findByEmail(dto.email);
        if (!user) {
            throw new NotFoundException('User not found');
        }

        const isPasswordValid = await bcrypt.compare(dto.password, user.password);
        if (!isPasswordValid) {
            throw new BadRequestException('Invalid password');
        }

        const payload: JwtPayload = { id: user.id, email: user.email };

        return this.jwtProvider.generateToken(payload, {
            secret: process.env.JWT_SECRET,
            expiresIn: process.env.JWT_EXPIRES_IN,
        })
    }
}