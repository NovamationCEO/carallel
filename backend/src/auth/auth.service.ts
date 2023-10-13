import { Injectable } from '@nestjs/common';

@Injectable()
export default class AuthService {
  validateUser(payload: any): boolean {
    console.log({ payload });
    console.log({ headers: payload.headers });
    return true;
  }
}
