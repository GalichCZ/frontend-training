import { IComment } from "./Comment";

export interface IArticle {
  title: string;
  perex: string;
  author: string;
  numOfComs: number;
  imageId: string;
  articleId: string;
  createdAt: Date;
  comments: IComment[];
}
