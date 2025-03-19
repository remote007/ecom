import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [{ productId: String, quantity: Number }],
  totalAmount: Number,
  status: { type: String, default: 'pending' },
});

export default mongoose.model('Order', orderSchema);
