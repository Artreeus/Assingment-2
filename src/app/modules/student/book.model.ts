// book.model.ts
import { Schema, model } from 'mongoose';
import { TBook } from './book.interface';

const bookSchema = new Schema<TBook>({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  author: {
    type: String,
    required: [true, 'Author is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price must be a positive number'],
    validate: {
      validator: (value: number) => {
        return value >= 0;
      },
      message: 'Price must be a positive number'
    }
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: [0, 'Quantity must be a non-negative number'],
    validate: {
      validator: (value: number) => {
        return value >= 0;
      },
      message: 'Quantity must be a non-negative number'
    }
  },
  inStock: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

export const Book = model<TBook>('Book', bookSchema);