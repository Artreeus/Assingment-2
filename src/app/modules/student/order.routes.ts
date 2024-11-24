
// order.routes.ts
import express from 'express';
import { createOrder, getRevenue } from './order.controller';

const router = express.Router();

router.post('/', createOrder);
router.get('/revenue', getRevenue);

export const OrderRoutes = router;