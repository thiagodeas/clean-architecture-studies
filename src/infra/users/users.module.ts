import { Module } from "@nestjs/common";
import { UserController } from "./controllers/user.controller";
import { CreateUserUseCase } from "src/application/user/use-cases/create-user.use-case";
import { InMemoryUserRepository } from "./repositories/in-memory-user.repository";
import { ListAllUsersUseCase } from "src/application/user/use-cases/list-all-users.use-case";
import { UpdateUserUseCase } from "src/application/user/use-cases/update-user.use-case";
import { DeleteUserUseCase } from "src/application/user/use-cases/delete-user.use-case";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [
        CreateUserUseCase,
        ListAllUsersUseCase,
        UpdateUserUseCase,
        DeleteUserUseCase,
        {
          provide: 'UserRepository',
          useClass: InMemoryUserRepository,
        },
        
    ],
    exports: ['UserRepository'],
})

export class UsersModule {}