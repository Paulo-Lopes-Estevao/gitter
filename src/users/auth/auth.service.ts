import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    login(email: string, password: string) {
        console.log(email, password);
    }
}
