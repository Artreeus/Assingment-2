import cors from 'cors';
import express, { Application } from 'express';
import { ProductRoutes } from './app/modules/student/product.route';
import { OrderRoutes } from './app/modules/student/order.routes';

const app: Application = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);

app.get('/', (req, res) => {
  const a = "Product server is running";
  res.status(200).send({ Status: a });
});





export default app;
