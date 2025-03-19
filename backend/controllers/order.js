const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  const order = new Order({ user: req.user.id, products: req.body.products, totalPrice: req.body.totalPrice });
  await order.save();
  res.json({ message: "Order placed", order });
};
