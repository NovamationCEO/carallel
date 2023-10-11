import { Injectable } from '@nestjs/common';
import { Article, ArticleDto } from './ArticleType';
import { Articles } from './Articles';

@Injectable()
export class ArticleService {
  findAll(): Article[] {
    return Articles.all;
  }

  // TODO: Censor?

  async findOne(id: string): Promise<Article[]> {
    const res = await Articles.get(id);
    return res || [];
  }

  async create(articleDto: ArticleDto): Promise<boolean> {
    console.log(articleDto);
    return true;
  }
}
