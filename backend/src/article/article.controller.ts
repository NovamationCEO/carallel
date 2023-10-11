import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article, ArticleDto } from './ArticleType';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  findAll(): Article[] {
    return this.articleService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Article> {
    return await this.articleService.findById(id);
  }

  @Post('create')
  async create(@Body() articleDto: ArticleDto): Promise<boolean> {
    return await this.articleService.create(articleDto);
  }
}
