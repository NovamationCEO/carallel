import { Injectable } from '@nestjs/common';
import { Articles } from './firebase/Articles';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getArticle(): string {
    // return 'BBB';
    return JSON.stringify(Articles.all);
  }
}
