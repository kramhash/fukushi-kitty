export interface IArticle {
  _id: string;
  id: string;
  title: string;
  belong: string;
  job: string;
  name: string;
  body: IArticleSection[];
}
export type IArticleShort = Pick<
  IArticle,
  "_id" | "id" | "title" | "belong" | "job" | "name"
>;

export interface IArticleSection {
  title: string;
  content: string;
}
