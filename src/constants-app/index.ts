export const loadResultInitialState = {
  // so, tried === true and loaded === false means Load Error

  loaded: false,
  tried: false,
  loading: false,
};

export const errorInitialState = {
  statusCode: null,
  message: null,
};

export const ERROR_TYPES = {
  SERVICE_TEMPORARILY_UNAVAILABLE: 503,
  BAD_GATEWAY: 502,
  SERVER_ERROR: 500,
  NOT_FOUND: 404,
  FORBIDDEN: 403,
  BAD_REQUEST: 400,
  SOMETHING_WENT_WRONG: "SOMETHING_WENT_WRONG",
};

export const ERROR_NOTIFICATION_TEXT = {
  SEARCH_ERROR: "The news you are looking for was not found. Please try again.",
  SOMETHING_WENT_WRONG:
    "News not found. Something went wrong. Please try again.",
};

export const categoriesInformation = [
  {
    id: 1,
    title: "Sport",
    url: "sport",
  },
  {
    id: 2,
    title: "Politics",
    url: "politics",
  },
  {
    id: 3,
    title: "Health",
    url: "health",
  },
  {
    id: 4,
    title: "Business",
    url: "business",
  },
];

export const APP_NAME = "NEWS APP";
export const DEFAULT_DATE_FORMAT = "MMM do yyyy";
export const AUTHOR_GITHUB = "https://github.com/VladyslavMakeienko/";
export const HELP_UKRAINE = "https://dou.ua/lenta/articles/stand-with-ukraine/";
