import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article, ArticleDto, CensoredArticle } from './ArticleType';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  findAll(): CensoredArticle[] {
    return this.articleService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Article> {
    return await this.articleService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async create(@Body() articleDto: ArticleDto): Promise<boolean> {
    return await this.articleService.create(articleDto);
  }
}
