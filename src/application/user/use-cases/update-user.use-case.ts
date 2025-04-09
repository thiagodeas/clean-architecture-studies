import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { User } from "src/domain/entities/user.entity";
import { UserRepository } from "src/domain/repositories/user.repository";
import { UpdateUserDto } from "src/infra/dto/update-user.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class UpdateUserUseCase {
    constructor(@Inject('UserRepository') private readonly userRepository: UserRepository) {}

    async execute(dto: UpdateUserDto): Promise<User> {
        const user = await this.userRepository.findByEmail(dto.email? dto.email : '');
        if (!user) {
            throw new NotFoundException('User not found');
        }

        user.name = dto.name? dto.name : user.name;
        user.email = dto.email? dto.email : user.email;

        if(dto.password) {
            const newPasswordHashed = await bcrypt.hash(dto.password, 10);
            user.password = newPasswordHashed;
        }

        await this.userRepository.update(user);

        return user;
    }
}