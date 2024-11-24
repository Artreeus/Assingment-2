// order.service.ts
import { Types } from 'mongoose';
import { Order } from './order.model';
import { Book } from '../student/book.model';
import { TOrder } from './order.interface';

export const createOrderService = async (orderData: TOrder) => {
  // Ensure orderData.product is an ObjectId
  const productId = new Types.ObjectId(orderData.product);
  
  // Start a MongoDB session for transaction
  const session = await Order.startSession();
  session.startTransaction();

  try {
    // Find the book and check inventory
    const book = await Book.findById(productId);
    if (!book) {
      throw new Error('Book not found');
    }

    if (book.quantity < orderData.quantity) {
      throw new Error('Insufficient stock');
    }

    // Create the order
    const order = await Order.create([{
      ...orderData,
      product: productId
    }], { session });

    // Update book inventory
    const updatedBook = await Book.findByIdAndUpdate(
      productId,
      {
        $inc: { quantity: -orderData.quantity },
        $set: { inStock: (book.quantity - orderData.quantity) > 0 }
      },
      { new: true, session }
    );

    if (!updatedBook) {
      throw new Error('Failed to update inventory');
    }

    // Commit the transaction
    await session.commitTransaction();
    return order[0];
  } catch (error) {
    // Rollback the transaction on error
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};

export const calculateRevenueService = async () => {
  const revenue = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' }
      }
    }
  ]);

  return revenue[0]?.totalRevenue || 0;
};