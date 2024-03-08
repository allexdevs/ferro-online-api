const db = require("../utils/db");
const ShoppingCart = require("../models/shopping-cart.model");

exports.getAll = (req, res, next) => {
  let sql = "SELECT * FROM shopping_cart";
  db.query(sql, (err, result) => {
    if (err) res.status(500).json({ error: err });
    else res.status(200).json(result);
  });
};

exports.get = (req, res, next) => {
  let name = req.params.name;
  let sql = `SELECT * FROM shopping_cart WHERE p_name LIKE '%${name}%'`;
  db.query(sql, (err, result) => {
    if (err) res.status(500).json({ error: err });
    else res.status(200).json(result);
  });
};

exports.post = (req, res, next) => {
  let data = req.body;
  let product = new ShoppingCart(
    0,
    data.name,
    parseInt(data.amount),
    parseFloat(data.price),
    parseFloat(data.total)
  );
  let sql = `INSERT INTO shopping_cart (p_name, p_amount, p_price, p_total) VALUES ('${product.name}', ${product.amount}, ${product.price}, ${product.total})`;
  db.query(sql, (err, result) => {
    if (err) res.status(500).json({ error: err });
    else res.status(201).json({ message: "Produto adicionado com sucesso!" });
  });
};

exports.put = (req, res, next) => {
  let data = req.body;
  let product = new ShoppingCart(
    parseInt(data.id),
    data.name,
    parseInt(data.amount),
    parseFloat(data.price),
    parseFloat(data.total)
  );
  let sql = `UPDATE shopping_cart SET p_name = '${product.name}', p_amount = ${product.amount}, p_price = ${product.price}, p_total = ${product.total} WHERE id = ${product.id}`;
  db.query(sql, (err, result) => {
    if (err) res.status(500).json({ error: err });
    else res.status(200).json({ message: "Produto atualizado com sucesso!" });
  });
};

exports.delete = (req, res, next) => {
  let id = parseInt(req.params.id);
  let sql = `DELETE FROM shopping_cart WHERE id = ${id}`;
  db.query(sql, (err, result) => {
    if (err) res.status(500).json({ error: err });
    else res.status(200).json({ message: "Produto excluído com sucesso!" });
  });
};
