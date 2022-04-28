import { News } from "types";
import { axiosInstance, HttpService } from "../http/httpFacade";

export const getNewsByCategory = async (data: string): Promise<News> => {
  await (axiosInstance.defaults.params = { q: `${data}`, page_size: 24 });
  const response = await HttpService.get(
    "https://free-news.p.rapidapi.com/v1/search"
  );
  return response;
};
