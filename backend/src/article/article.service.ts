import { Injectable } from '@nestjs/common';
import { Article } from './ArticleType';
import { Articles } from './Articles';

@Injectable()
export class ArticleService {
  findAll(): Article[] {
    return Articles.all;
  }
  async findOne(id: string): Promise<Article | null> {
    console.log({ id });
    const res = await Articles.get(id);
    return res[0] || null;
  }
}
