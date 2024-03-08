const db = require("../utils/db");
const Product = require("../models/product.model");

exports.get = (req, res, next) => {
  let sql = "SELECT * FROM products";
  db.query(sql, (err, result) => {
    if (err) res.status(500).json({ error: err });
    else res.status(200).json(result);
  });
};

exports.get = (req, res, next) => {
  let name = req.params.name;
  let sql = `SELECT * FROM products WHERE p_name LIKE '%${name}%'`;
  db.query(sql, (err, result) => {
    if (err) res.status(500).json({ error: err });
    else res.status(200).json(result);
  });
};

exports.post = (req, res, next) => {
  let data = req.body;
  let product = new Product(0, data.name, parseFloat(data.price));
  let sql = `INSERT INTO products (p_name, p_price) VALUES ('${product.name}', ${product.price})`;
  db.query(sql, (err, result) => {
    if (err) res.status(500).json({ error: err });
    else res.status(201).json({ message: "Produto adicionado com sucesso!" });
  });
};

exports.put = (req, res, next) => {
  let data = req.body;
  let product = new Product(
    parseInt(data.id),
    data.name,
    parseFloat(data.price)
  );
  let sql = `UPDATE products SET p_name = '${product.name}', p_price = ${product.price} WHERE id = ${product.id}`;
  db.query(sql, (err, result) => {
    if (err) res.status(500).json({ error: err });
    else res.status(200).json({ message: "Produto atualizado com sucesso!" });
  });
};

exports.delete = (req, res, next) => {
  let id = parseInt(req.params.id);
  let sql = `DELETE FROM products WHERE id = ${id}`;
  db.query(sql, (err, result) => {
    if (err) res.status(500).json({ error: err });
    else res.status(200).json({ message: "Produto excluído com sucesso!" });
  });
};
