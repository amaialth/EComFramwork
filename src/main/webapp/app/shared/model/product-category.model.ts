export interface IProductCategory {
  id?: number;
  category_id?: number;
  category?: string;
  active?: string;
}

export class ProductCategory implements IProductCategory {
  constructor(public id?: number, public category_id?: number, public category?: string, public active?: string) {}
}
