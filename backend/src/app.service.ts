import { Injectable } from '@nestjs/common';
import { Articles } from './article/Articles';
import { Article } from './article/ArticleType';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getArticle(): Article[] {
    return Articles.all;
  }
}
