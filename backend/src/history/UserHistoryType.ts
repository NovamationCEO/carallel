export type UserHistoryItem = {
  id: string;
  userId?: string;
  articleId: string;
  date: Date;
};

export class UserHistoryDto {
  userId: string;
  articleId: string;
}
