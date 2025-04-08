import { Inject, Injectable } from "@nestjs/common";
import { User } from "src/domain/entities/user.entity";
import { UserRepository } from "src/domain/repositories/user.repository";

@Injectable()
export class ListAllUsersUseCase {
    constructor(@Inject('UserRepository') private readonly userRepository: UserRepository) {} 

    async execute(): Promise<User[]> {
        return this.userRepository.findAll();
    }
}