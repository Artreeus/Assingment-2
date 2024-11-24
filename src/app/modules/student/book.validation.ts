import { z } from 'zod';

// Create Book Schema validation
export const createBookSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title cannot exceed 100 characters"),
  author: z.string().min(1, "Author is required").max(50, "Author cannot exceed 50 characters"),
  price: z.number().min(0, "Price must be a positive number"),
  category: z.enum(["Fiction", "Science", "SelfDevelopment", "Poetry", "Religious"]),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long")
    .max(500, "Description cannot exceed 500 characters"),
  quantity: z.number().int().min(0, "Quantity must be a positive integer"),
  inStock: z.boolean(),
});
