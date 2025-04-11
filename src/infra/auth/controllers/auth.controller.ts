import { Body, Controller, Post } from "@nestjs/common";
import { LoginUserDto } from "../dto/login-user.dto";
import { LoginUseCase } from "src/application/auth/use-cases/login.use-case";

@Controller('auth') 
export class AuthController {
    constructor(private readonly loginUseCase: LoginUseCase) {}
    
    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto) {
        return this.loginUseCase.execute(loginUserDto);
    }
}