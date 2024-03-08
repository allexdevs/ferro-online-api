const express = require("express");
const router = express.Router();
const controller = require("../controllers/product.controller");

router.get("/products", controller.get);
router.get("/search-product-by-name/:name", controller.get);
router.post("/add-product", controller.post);
router.put("/update-product", controller.put);
router.delete("/delete-product/:id", controller.delete);

module.exports = router;