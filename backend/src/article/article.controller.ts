import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article, ArticleDto, CensoredArticle } from './ArticleType';
import { AuthGuard } from '@nestjs/passport';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  findAll(): CensoredArticle[] {
    return this.articleService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Article> {
    return await this.articleService.findById(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async create(@Body() articleDto: ArticleDto): Promise<boolean> {
    return await this.articleService.create(articleDto);
  }
}
