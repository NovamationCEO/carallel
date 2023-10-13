import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserHistoryItem, UserHistoryDto } from './UserHistoryType';
import { AuthGuard } from '@nestjs/passport';
import { UserHistoryService } from './userHistory.service';

@Controller('history')
export class UserHistoryController {
  constructor(private readonly historyService: UserHistoryService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findByUserId(@Param('id') id: string): Promise<UserHistoryItem[]> {
    return await this.historyService.findByUserId(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/item/:id')
  async findById(@Param('id') id: string): Promise<UserHistoryItem> {
    return await this.historyService.findById(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async create(@Body() historyDto: UserHistoryDto): Promise<boolean> {
    return await this.historyService.create(historyDto);
  }
}
