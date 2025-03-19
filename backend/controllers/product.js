const Product = require("../models/Product");

exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json({ products });
};

exports.createProduct = async (req, res) => {
  const { name, price, stock } = req.body;
  const product = new Product({ name, price, stock });
  await product.save();
  res.json({ message: "Product created", product });
};
