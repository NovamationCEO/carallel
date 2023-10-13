import { Injectable } from '@nestjs/common';
import { UserHistory } from './UserHistory';
import { UserHistoryItem, UserHistoryDto } from './UserHistoryType';

@Injectable()
export class UserHistoryService {
  async findByUserId(id: string): Promise<UserHistoryItem[]> {
    const res = await UserHistory.findByUserId(id);
    return res;
  }

  async findById(id: string): Promise<UserHistoryItem> {
    return await UserHistory.findById(id);
  }

  async create(historyDto: UserHistoryDto): Promise<boolean> {
    const success = UserHistory.write(historyDto);
    return !!success;
  }
}
