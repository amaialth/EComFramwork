export interface IProductSubCategory {
  id?: number;
  sub_category_id?: number;
  category_id?: number;
  sub_category?: string;
  active?: string;
  product_categoryProduct_category?: string;
  product_categoryId?: number;
}

export class ProductSubCategory implements IProductSubCategory {
  constructor(
    public id?: number,
    public sub_category_id?: number,
    public category_id?: number,
    public sub_category?: string,
    public active?: string,
    public product_categoryProduct_category?: string,
    public product_categoryId?: number
  ) {}
}
