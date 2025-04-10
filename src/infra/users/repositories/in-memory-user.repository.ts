import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "src/domain/entities/user.entity";
import { UserRepository } from "src/domain/repositories/user.repository";

@Injectable()
export class InMemoryUserRepository implements UserRepository {
    private users: User[] = [];

    async create(user: User): Promise<User> {
        this.users.push(user);
        return user;
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.users.find(user => user.email === email) || null;
    }

    async findById(id: string): Promise<User | null> {
        return this.users.find(user => user.id === id) || null;
    }

    async findAll(): Promise<User[]> {
        return this.users;
    }

    async update(user: User): Promise<User> {
        const index = this.users.findIndex(u => u.id === user.id);

        if(index === -1) {
            throw new NotFoundException(`User with id ${user.id} not found`);
        }

        this.users[index] = user;
        return user;
    }

    async delete(id: string): Promise<void> {
       this.users = this.users.filter(user => user.id !== id);
    }
}