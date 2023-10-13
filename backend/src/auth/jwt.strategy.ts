import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import * as dotenv from 'dotenv';
import AuthService from './auth.service';

dotenv.config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET_KEY,
    });
  }
  async validate(payload: any): Promise<boolean> {
    const user = await this.authService.validateUser(payload);
    return !!user;
  }
}

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor() {
//     super({
//       secretOrKeyProvider: passportJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         jwksUri: `${process.env.AUTH0_ISSUER_URL}.well-known/jwks.json`,
//       }),

//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       audience: process.env.AUTH0_AUDIENCE,
//       issuer: `${process.env.AUTH0_ISSUER_URL}`,
//       algorithms: ['RS256'],
//     });
//   }

//   validate(payload: unknown): unknown {
//     return payload;
//   }
// }
