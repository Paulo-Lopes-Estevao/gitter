import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.SECRET_JWT,
      signOptions: {
        expiresIn: '60s',
      }
    })
  ],
  controllers: [UsersController, AuthController],
  providers: [UsersService, AuthService]
})
export class UsersModule { }
