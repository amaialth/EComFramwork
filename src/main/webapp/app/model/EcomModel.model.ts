import { Category } from './cotegory.model';
import { Product } from './product.model';
import { Wishlist } from './wishlist.model';
import { Cart } from './cart.model';
import { User } from './user.model';

export class EcomModel {
  private categories: Category[];
  private products: Product[];
  private user: User;
  private wishlist: Wishlist;
  private cart: Cart;
  constructor(categories: Category[], products: Product[], user: User, wishlist: Wishlist, cart: Cart) {
    this.categories = categories;
    this.products = products;
    this.user = user != null ? user : null;
    this.wishlist = wishlist != null ? wishlist : null;
    this.cart = cart != null ? cart : null;
  }
}
