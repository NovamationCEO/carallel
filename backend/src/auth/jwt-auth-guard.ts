import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
// import * as jwt from 'jsonwebtoken';
@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const bearerToken = request.headers.authorization;

    // console.log({ request });
    // console.log({ bearerToken });

    // async function validate() {
    //   const thing = await jwt.verify(
    //     JSON.stringify(request),
    //     process.env.SECRET_KEY,
    //   );
    //   console.log({ thing });
    //   return true;
    // }

    // return validate();

    return !!bearerToken;
  }
}
