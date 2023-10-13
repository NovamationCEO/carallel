export type Article = {
  id: string;
  title: string;
  link: string;
  description?: string;
};

export type ArticleRecord = Record<
  'id' | 'title' | 'link' | 'description',
  string
>;

export class ArticleDto {
  title: string;
  link: string;
  description?: string;
}

export type CensoredArticle = {
  id: string;
  title: string;
  description: string;
};
