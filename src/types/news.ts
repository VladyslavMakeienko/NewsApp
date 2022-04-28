type UserInput = {
  from: string;
  lang?: string;
  page: number;
  q: string;
  size: number;
  sortBy: string;
};

export type News = {
  articles: Array<NewsInformation>;
  page: number;
  pageSize: number;
  status: string;
  totalHits?: number;
  totalPages?: number;
  userInput: UserInput;
};

export type NewsInformation = {
  author: string;
  authors?: Array<string>;
  cleanUrl?: string;
  country: string;
  isOpinion: boolean;
  language: string;
  link?: string;
  media?: string;
  publishedDate: string | Date;
  publishedDatePrecision?: string;
  rank: number;
  rights: string;
  summary?: string;
  title?: string;
  topic: string;
  twitterAccount?: string;
  id: string;
  score?: number;
};

type MainNewsInformation = Pick<
  NewsInformation,
  "id" | "title" | "summary" | "media" | "publishedDate" | "author"
>;

export type TransformedNewsInformation = MainNewsInformation;
