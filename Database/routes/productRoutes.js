import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// Add Product
router.post("/", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

// Get All Products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

export default router;
