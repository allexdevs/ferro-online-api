class ShoppingCart {
  id;
  name;
  amount;
  price;
  total;

  constructor(id, name, amount, price, total) {
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.price = price;
    this.total = total;
  }
}

module.exports = ShoppingCart;
