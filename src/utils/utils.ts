import { checkIsArray } from "./helpers";
import { filter, includes, map } from "lodash";
import { NewsInformation, TransformedNewsInformation } from "types";

type PropsFilteredNews = {
  news: TransformedNewsInformation[];
  newsTitle: string;
};

export const transformNews = (news: NewsInformation[]) => {
  let result: TransformedNewsInformation[] = [];

  if (checkIsArray(news)) {
    result = map(news, (newsItem) => {
      return {
        id: newsItem.id,
        title: newsItem.title,
        summary: newsItem.summary,
        author: newsItem.author,
        media: newsItem.media,
        publishedDate: newsItem.publishedDate,
      } as TransformedNewsInformation;
    });
  }
  return result;
};

export const setFilteredNews = ({
  news,
  newsTitle,
}: PropsFilteredNews): TransformedNewsInformation[] => {
  return filter(news, (newsItem) =>
    includes(newsItem.title?.toLowerCase(), newsTitle.toLowerCase())
  );
};
