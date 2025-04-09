import { Module } from '@nestjs/common';
import { UserController } from './infra/controllers/user.controller';
import { CreateUserUseCase } from './application/user/use-cases/create-user.use-case';
import { InMemoryUserRepository } from './infra/repositories/in-memory-user.repository';
import { ListAllUsersUseCase } from './application/user/use-cases/list-all-users.use-case';
import { UpdateUserUseCase } from './application/user/use-cases/update-user.use-case';
import { DeleteUserUseCase } from './application/user/use-cases/delete-user.use-case';


@Module({
  imports: [],
  controllers: [UserController],
  providers: [
  CreateUserUseCase,
  {
    provide: 'UserRepository',
    useClass: InMemoryUserRepository,
  },
  ListAllUsersUseCase,
  UpdateUserUseCase,
  DeleteUserUseCase
],
})
export class AppModule {}