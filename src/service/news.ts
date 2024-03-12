import { NewsListMapper } from "../data/mapper/newsMapper";
import { apiService } from "./api";

class NewsService {
  async getNews() {
    const response = await apiService.get("&language=en&category=sports,technology,business");
    return NewsListMapper(response?.results ?? []);
  }
}

export const newsService = new NewsService();

export default newsService;
