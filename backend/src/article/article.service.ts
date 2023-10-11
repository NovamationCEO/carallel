import { Injectable } from '@nestjs/common';
import { Article } from './ArticleType';
import { Articles } from './Articles';

@Injectable()
export class ArticleService {
  getAll(): Article[] {
    return Articles.all;
  }
}
