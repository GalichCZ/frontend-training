import { IArticle } from "../Types/Article";

export const sortArticles = (
  arrayOfObjects: IArticle[],
  datePropertyKey: keyof IArticle
) => {
  function sortByDateDescending(a: IArticle, b: IArticle): number {
    const dateA = new Date(a[datePropertyKey] as any);
    const dateB = new Date(b[datePropertyKey] as any);
    return dateB.getTime() - dateA.getTime();
  }

  return arrayOfObjects.sort(sortByDateDescending);
};
