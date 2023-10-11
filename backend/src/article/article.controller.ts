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
  async findOne(@Param('id') id: string): Promise<Article[]> {
    return await this.articleService.findOne(id);
  }

  @Post()
  async create(@Body() articleDto: ArticleDto): Promise<boolean> {
    return await this.articleService.create(articleDto);
  }
}
