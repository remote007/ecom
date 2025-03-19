import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import connectDB from './config/db.js';
import { redisClient } from './config/redis.js';
import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/product.js";
import cartRoutes from "./routes/cart.js";
import orderRoutes from "./routes/order.js";
import paymentRoutes from "./routes/payment.js";
import adminRoutes from "./routes/admin.js";
import { errorHandler } from './middlewares/error.js';

dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/admin", adminRoutes);

connectDB();
app.use(errorHandler);
app.listen(PORT, () => console.log('Server running on port 5000'));
