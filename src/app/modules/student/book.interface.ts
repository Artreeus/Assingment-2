import { Model } from 'mongoose';

// Define the types for Book model
export type TBook = {
  title: string;
  author: string;
  price: number;
  category: 'Fiction' | 'Science' | 'SelfDevelopment' | 'Poetry' | 'Religious';
  description: string;
  quantity: number;
  inStock: boolean;
};

// Define the interface for Book Model
export interface BookModel extends Model<TBook> {}
