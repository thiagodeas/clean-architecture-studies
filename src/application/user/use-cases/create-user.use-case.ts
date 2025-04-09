import { UserRepository } from "src/domain/repositories/user.repository";
import { CreateUserDto } from "../../../infra/dto/create-user.dto";
import { User } from "src/domain/entities/user.entity";
import { ConflictException, Inject, Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";

@Injectable()
export class CreateUserUseCase {
    constructor(@Inject('UserRepository') private readonly userRepository: UserRepository) {}

    async execute(dto: CreateUserDto): Promise<User> {
        const userAlreadyExists = await this.userRepository.findByEmail(dto.email);
        if (userAlreadyExists) {
            throw new ConflictException('User already exists');
        }

        const hashedPassword = await bcrypt.hash(dto.password, 10);

        const user = new User(
            dto.name,
            dto.email,
            hashedPassword,
        );

        await this.userRepository.create(user);

        return user;
    }
}