import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "src/domain/entities/user.entity";
import { UserRepository } from "src/domain/repositories/user.repository";
import { UpdateUserDto } from "src/infra/dto/update-user.dto";

@Injectable()
export class UpdateUserUseCase {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(dto: UpdateUserDto): Promise<User> {
        const user = await this.userRepository.findByEmail(dto.email? dto.email : '');
        if (!user) {
            throw new NotFoundException('User not found');
        }

        user.name = dto.name? dto.name : user.name;
        user.email = dto.email? dto.email : user.email;
        user.password = dto.password? dto.password : user.password;

        await this.userRepository.update(user);

        return user;
    }
}