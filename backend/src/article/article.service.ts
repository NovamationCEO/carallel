import { Injectable } from '@nestjs/common';
import { Article, ArticleDto } from './ArticleType';
import { Articles } from './Articles';

@Injectable()
export class ArticleService {
  findAll(): Article[] {
    return Articles.all;
  }
  // TODO: Censor?

  async findById(id: string): Promise<Article> {
    const res = await Articles.findById(id);
    return res;
  }

  async create(articleDto: ArticleDto): Promise<boolean> {
    const success = Articles.write(articleDto);
    return !!success;
  }
}
