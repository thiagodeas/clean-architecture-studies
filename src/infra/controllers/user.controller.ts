import { Body, Controller, Get, Patch, Post } from "@nestjs/common";
import { CreateUserUseCase } from "src/application/user/use-cases/create-user.use-case";
import { CreateUserDto } from "../dto/create-user.dto";
import { ListAllUsersUseCase } from './../../application/user/use-cases/list-all-users.use-case';
import { UpdateUserUseCase } from "src/application/user/use-cases/update-user.use-case";
import { UpdateUserDto } from "../dto/update-user.dto";

@Controller('users')
export class UserController {
    constructor(
        private readonly createUserUseCase: CreateUserUseCase,
        private readonly listAllUsersUseCase: ListAllUsersUseCase,
        private readonly updateUserUseCase: UpdateUserUseCase,
    ) {}

    @Post()
    async create(@Body() dto: CreateUserDto) {
        return this.createUserUseCase.execute(dto);
    }

    @Get()
    async listAllUsers() {
        return this.listAllUsersUseCase.execute();
    }

    @Patch()
    async updateUser(@Body() dto: UpdateUserDto) {
        return this.updateUserUseCase.execute(dto);
    }
}