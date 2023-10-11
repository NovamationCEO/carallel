import { Controller, Get } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './ArticleType';

@Controller()
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  getAll(): Article[] {
    return this.articleService.getAll();
  }
}
