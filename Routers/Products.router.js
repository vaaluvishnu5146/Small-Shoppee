const ProductShield = require("../Middlewares/ProductShield");

const ProductsRouter = require("express").Router();

ProductsRouter.post("/create", ProductShield, (req, res, next) => {
  return res.status(200).json({
    message: "Product created successfully",
  });
});

ProductsRouter.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Product fetched successfully",
  });
});

module.exports = ProductsRouter;
