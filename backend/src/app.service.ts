import { Injectable } from '@nestjs/common';
import { Articles } from './firebase/Articles';
import { Article } from './types/Article';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getArticle(): Article[] {
    return Articles.all;
  }
}
