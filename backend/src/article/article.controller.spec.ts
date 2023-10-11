import { Test, TestingModule } from '@nestjs/testing';
import { login } from '../firebase/FireApp';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';

describe('AppController', () => {
  let articleController: ArticleController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ArticleController],
      providers: [ArticleService],
    }).compile();

    articleController = app.get<ArticleController>(ArticleController);

    await login();
  });

  describe('Articles', () => {
    it('should return an array when getting all', async () => {
      const res = await articleController.getAll();
      expect(res).toBeDefined();
      expect(Array.isArray(res)).toBe(true);
    });
  });
});
