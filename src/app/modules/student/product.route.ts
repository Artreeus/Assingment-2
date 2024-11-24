import express from 'express';
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} from './product.controller';

const router = express.Router();

// Routes for Product (Books)
router.post('/', createBook);                // Create a new book
router.get('/', getAllBooks);                // Get all books or filter by searchTerm
router.get('/:productId', getBookById);      // Get a specific book
router.put('/:productId', updateBook);       // Update a book
router.delete('/:productId', deleteBook);    // Delete a book

export const ProductRoutes = router;