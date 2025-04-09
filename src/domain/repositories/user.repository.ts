import { User } from "../entities/user.entity";

export interface UserRepository {
    create(user: User): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    findById(id: string): Promise<User>;
    findAll(): Promise<User[]>;
    update(user: User): Promise<User>;
    delete(id: string): Promise<void>;
}