import { Test, TestingModule } from '@nestjs/testing';
import { login } from '../firebase/FireApp';
import { UserHistoryController } from './userHistory.controller';
import { UserHistoryService } from './userHistory.service';

describe('AppController', () => {
  let historyController: UserHistoryController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserHistoryController],
      providers: [UserHistoryService],
    }).compile();

    historyController = app.get<UserHistoryController>(UserHistoryController);

    await login();
  });

  describe('Articles', () => {
    it('should return an array when getting all', async () => {
      const res = await historyController.findByUserId('3');
      expect(res).toBeDefined();
      expect(Array.isArray(res)).toBe(true);
    });
  });
});
