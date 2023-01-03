import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategyService } from './auth/jwt-strategy/jwt-strategy.service';

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
  providers: [UsersService, AuthService, JwtStrategyService]
})
export class UsersModule { }
