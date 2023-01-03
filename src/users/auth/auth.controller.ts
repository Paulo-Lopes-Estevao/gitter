import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post("login")
    login(@Body() body){
        this.authService.login(body.email, body.password)
    }

}
