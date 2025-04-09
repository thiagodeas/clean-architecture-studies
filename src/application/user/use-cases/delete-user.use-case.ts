import { Inject, NotFoundException } from "@nestjs/common";
import { UserRepository } from "src/domain/repositories/user.repository";

export class DeleteUserUseCase {
    constructor(@Inject('UserRepository') private readonly userRepository: UserRepository) {}

    async execute(id: string): Promise<void> {
        const user = await this.userRepository.findByEmail(id);
        if(!user) {
            throw new NotFoundException('User not found');
        }

        await this.userRepository.delete(id);
    }

}