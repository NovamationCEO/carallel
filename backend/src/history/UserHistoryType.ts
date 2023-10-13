export type UserHistoryItem = {
  id: string;
  userId?: string;
  articleId: string;
  date: string;
  title: string;
  link: string;
};

export class UserHistoryDto {
  userId: string;
  articleId: string;
  date: string;
  title: string;
  link: string;
}
