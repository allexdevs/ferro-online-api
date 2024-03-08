const express = require("express");
const router = express.Router();
const controller = require("../controllers/shopping-cart.controller");

router.get("/shopping-cart", controller.getAll);
router.get("/search-shopping-cart-by-name/:name", controller.get);
router.post("/add-shopping-cart", controller.post);
router.put("/update-shopping-cart", controller.put);
router.delete("/delete-shopping-cart/:id", controller.delete);

module.exports = router;
