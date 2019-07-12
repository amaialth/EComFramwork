import { Product } from './product.model';

export class Wishlist {
  private id: Number;
  private products: Product[];
  constructor(id: Number, products: Product[]) {
    this.id = id != null ? id : 0;
    this.products = products;
  }
}
