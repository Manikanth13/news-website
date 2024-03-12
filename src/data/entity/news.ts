export class NewsEntity {
  title: string;
  publicationHouse: string;
  publicationDate: string;
  content: string;
  image: string;
  category: string;
  author: string;
  id: string;

  constructor(data: NewsEntity) {
    this.title = data.title;
    this.publicationHouse = data.publicationHouse;
    this.publicationDate = data.publicationDate;
    this.content = data.content;
    this.image = data.image;
    this.category = data.category;
    this.author = data.author;
    this.id = data.id;
  }
}
