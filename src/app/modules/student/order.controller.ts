// order.controller.ts
import { Request, Response } from 'express';
import { createOrderService, calculateRevenueService } from './order.service';
import { TOrder } from './order.interface';

export const createOrder = async (req: Request<{}, {}, TOrder>, res: Response) => {
  try {
    const orderData = req.body;
    const order = await createOrderService(orderData);
    res.status(201).json({
      message: 'Order created successfully',
      success: true,
      data: order,
    });
  } catch (error: any) {
    const statusCode = error.message === 'Insufficient stock' ? 400 : 500;
    res.status(statusCode).json({
      message: error.message,
      success: false,
    });
  }
};

export const getRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await calculateRevenueService();
    res.status(200).json({
      message: 'Revenue calculated successfully',
      success: true,
      data: {
        totalRevenue,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};