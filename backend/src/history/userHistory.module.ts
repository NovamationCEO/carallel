import { Module } from '@nestjs/common';
import { UserHistoryController } from './userHistory.controller';
import { UserHistoryService } from './userHistory.service';

@Module({
  imports: [],
  controllers: [UserHistoryController],
  providers: [UserHistoryService],
})
export class UserHistoryModule {}
