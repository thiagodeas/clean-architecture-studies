import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserUseCase } from "src/application/user/use-cases/create-user.use-case";
import { CreateUserDto } from "../dto/create-user.dto";

@Controller('users')
export class UserController {
    constructor(
        private readonly createUserUseCase: CreateUserUseCase
    ) {}

    @Post()
    async create(@Body() dto: CreateUserDto) {
        return this.createUserUseCase.execute(dto);
    }
}