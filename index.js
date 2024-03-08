const express = require("express");
const port = 5100;

const app = express();
app.use(express.json());

// routes;
const products = require("./routes/product.route");
const shopping_cart = require("./routes/shopping-cart.route");

app.use(products);
app.use(shopping_cart);

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));
