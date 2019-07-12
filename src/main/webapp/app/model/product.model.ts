import { Category } from './cotegory.model';

export class Product {
  private id: Number;
  private category: Category;
  private name: String;
  private description: String;
  private rating: Number;
  private imageRoot: String;
  private imageThamnil: String;
  constructor(id: Number, category: Category, name: String, description: String, rating: Number, imageRoot: String, imageThamnil: String) {
    this.id = id != null ? id : 0;
    this.category = category != null ? category : new Category(0, '');
    this.name = name != null ? name : '';
    this.description = description != null ? description : '';
    this.rating = rating != null ? rating : 0;
    this.imageRoot = imageRoot != null ? imageRoot : '';
    this.imageThamnil = imageThamnil != null ? imageThamnil : '';
  }
}
