import axios from "axios";
import { toCamelCaseFields } from "utils";

const API_KEY = process.env.REACT_APP_API_KEY;

const timeout = 5 * 60 * 1000;

export const axiosInstance = axios.create({
  timeout,
  timeoutErrorMessage:
    "The request is too long, maybe there is problem with the internet connection.",
  headers: {
    "x-rapidapi-host": "free-news.p.rapidapi.com",
    "x-rapidapi-key": `${API_KEY}`,
  },
  params: { lang: "en" },
});

axiosInstance.interceptors.response.use(
  (response) => {
    const { data } = response;

    if (!data) {
      return response;
    }

    const newData = toCamelCaseFields(data);

    return { ...response, data: newData };
  },
  (error: any) => {
    const { status, data } = error.response;

    throw new HttpError(data.message, data, status);
  }
);

class Http {
  post = async (url: string, data: any, headers = {}) => {
    return await axiosInstance
      .post(url, data, { headers })
      .then((response) => response.data);
  };

  get = async (url: string, headers = {}) => {
    return await axiosInstance
      .get(url, { headers })
      .then((response) => response.data);
  };

  put = async (url: string, data: any, headers = {}) => {
    return await axiosInstance
      .put(url, data, { headers })
      .then((response) => response.data);
  };

  delete = async (url: string) => {
    return await axiosInstance.delete(url).then((response) => response.data);
  };
}

class HttpError extends Error {
  status?: string;
  response: any = null;

  constructor(message: string, data: any, status: string) {
    super(message);
    this.response = { status, data: toCamelCaseFields(data) };
  }
}

export const HttpService = new Http();
