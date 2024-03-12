import moment from "moment";
import { NewsEntity } from "../entity/news";
import { Article, NewsBffData } from "../types/news";

export const NewsItemMapper = (data: Article) => {
  return new NewsEntity({
    author: data?.creator?.[0] ?? "",
    category: data?.category?.[0] ?? "",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    image: data?.image_url?.includes(".gif")
      ? "/assets/image.png"
      : data?.image_url ?? "/assets/image.png",
    publicationDate:
      moment(data?.pubDate, "YYYY-MM-DD h:mm:ss").format("Do MMMM YYYY") ?? "",
    publicationHouse: data?.source_id ?? "",
    title: data?.title ?? "",
    id: data?.article_id ?? "",
  });
};

export const NewsListMapper = (data: Article[]): NewsEntity[] => {
  return data.map(NewsItemMapper);
};
