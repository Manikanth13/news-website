import * as Constant from "../constants";
import { useQuery } from "react-query";
import { newsService } from "@app/service";

export const useGetNews = () => {
  return useQuery([Constant.GET_NEWS], () => newsService.getNews(), {
    enabled: true,
  });
};
