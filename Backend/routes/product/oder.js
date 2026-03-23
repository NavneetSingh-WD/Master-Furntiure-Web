const express = require("express");
const router = express.Router();
const Order = require("../../model/oder");

// Create order
router.post("/create", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update delivery status
router.put("/status/:id", async (req, res) => {
  const { status } = req.body;

  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { deliveryStatus: status },
    { new: true }
  );

  res.json(order);
});

// Get user orders
router.get("/:userId", async (req, res) => {
  const orders = await Order.find({ userId: req.params.userId })
    .populate("items.productId");
  res.json(orders);
});

module.exports = router;