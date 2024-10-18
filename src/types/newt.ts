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

export interface IGallery {
  _id: string;
  name: string;
  text: string;
  generatedImage: INewtImage;
}

export interface INewtImage {
  _id: string;
  src: string;
  width: number;
  height: number;
}
