export interface IArticle {
  _id: string;
  id: number;
  title: string;
  belong: string;
  job: string;
  name: string;
  motivation: string;
  career: string;
  body: IArticleSection[];
  cardImage: INewtImage;
  mainImage: INewtImage;
}
export type IArticleShort = Pick<
  IArticle,
  "_id" | "id" | "motivation" | "belong" | "job" | "name"
>;

export interface IArticleSection {
  title: string;
  content: string;
}

export interface IGallery {
  _id: string;
  generatedImage: INewtImage;
}

export interface INewtImage {
  _id: string;
  src: string;
  width: number;
  height: number;
}
