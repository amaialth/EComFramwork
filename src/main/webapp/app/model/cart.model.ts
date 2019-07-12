import { Product } from './product.model';

export class Cart {
  private id: Number;
  private products: Product[];
  constructor(id: Number, products: Product[]) {
    this.id = id != null ? id : 0;
    this.products = products;
  }
}
