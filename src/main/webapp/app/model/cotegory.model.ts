export class Category {
  private id: Number;
  private category: String;
  constructor(id: Number, category: String) {
    this.id = id != null ? id : 0;
    this.category = category != null ? category : '';
  }
}
