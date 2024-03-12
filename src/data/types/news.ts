import { NewsEntity } from "../entity/news";

export interface NewsBffData {
  title: string;
  author: string;
  publication_date: string;
  content: string;
  image_url: string;
  category: string;
  created_by: string;
}

export interface CategorisedNews {
  category: string;
  items: NewsEntity[];
}

export interface Article {
  article_id: string;
  title: string;
  link: string;
  keywords: string[];
  creator: string[];
  video_url: string;
  description: string;
  content: string; // This field seems to be restricted to certain plans, should be checked against user plan
  pubDate: string;
  image_url: string;
  source_id: string;
  source_url: string;
  source_icon: string;
  source_priority: number;
  country: string[];
  category: string[];
  language: string;
  ai_tag: string; // This field seems to be restricted to certain plans, should be checked against user plan
  sentiment: string; // This field seems to be restricted to certain plans, should be checked against user plan
  sentiment_stats: string; // This field seems to be restricted to certain plans, should be checked against user plan
  ai_region: string; // This field seems to be restricted to certain plans, should be checked against user plan
}

export interface ArticleResponse {
  status: string;
  totalResults: number;
  results: Article[];
  nextPage: string;
}
