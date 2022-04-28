export interface LoadResult {
  // so, tried === true and loaded === false means Load Error

  loaded: boolean;
  tried: boolean;
  loading: boolean;
}

export type ErrorResult = {
  statusCode: number | null;
  message: string | null;
};

export type { ErrorInformation } from "./error";
export type { News, NewsInformation, TransformedNewsInformation } from "./news";
