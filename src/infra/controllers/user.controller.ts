import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserUseCase } from "src/application/user/use-cases/create-user.use-case";
import { CreateUserDto } from "../dto/create-user.dto";
import { ListAllUsersUseCase } from './../../application/user/use-cases/list-all-users.use-case';

@Controller('users')
export class UserController {
    constructor(
        private readonly createUserUseCase: CreateUserUseCase,
        private readonly listAllUsersUseCase: ListAllUsersUseCase,
    ) {}

    @Post()
    async create(@Body() dto: CreateUserDto) {
        return this.createUserUseCase.execute(dto);
    }

    @Get()
    async listAllUsers() {
        return this.listAllUsersUseCase.execute();
    }
}