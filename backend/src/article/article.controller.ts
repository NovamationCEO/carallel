import { Controller, Get, Param, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './ArticleType';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  findAll(): Article[] {
    return this.articleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Article | null> {
    return await this.articleService.findOne(id);
  }

  @Post()
  create(): boolean {
    return true;
  }
}
