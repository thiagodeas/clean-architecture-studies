import { Module } from '@nestjs/common';
import { UserController } from './infra/controllers/user.controller';
import { CreateUserUseCase } from './application/user/use-cases/create-user.use-case';
import { InMemoryUserRepository } from './infra/repositories/in-memory-user.repository';
import { FindAllUsersUseCase } from './application/user/use-cases/find-all-users.use-case';


@Module({
  imports: [],
  controllers: [UserController],
  providers: [CreateUserUseCase,
  {
    provide: 'UserRepository',
    useClass: InMemoryUserRepository,
  }, FindAllUsersUseCase
],
})
export class AppModule {}