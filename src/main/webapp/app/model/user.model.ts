export class User {
  private id: Number;
  private username: String;
  private email: String;
  private phone: String;
  private address: String;
  constructor(id: Number, username: String, email: String, phone: String, address: String) {
    this.id = id != null ? id : 0;
    this.username = username != null ? username : '';
    this.email = email != null ? email : '';
    this.phone = phone != null ? phone : '';
    this.address = address != null ? address : '';
  }
}
