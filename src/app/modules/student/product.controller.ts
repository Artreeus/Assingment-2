import { Request, Response } from 'express';
import {
  createBookService,
  getAllBooksService,
  getBookByIdService,
  updateBookService,
  deleteBookService,
} from './product.service';
import { TBook } from './book.interface';

// Create a new book
export const createBook = async (req: Request<{}, {}, TBook>, res: Response) => {
  try {
    const bookData = req.body;
    const createdBook = await createBookService(bookData);
    res.status(201).json({
      message: 'Book created successfully',
      success: true,
      data: createdBook,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message, success: false });
  }
};

// Get all books or filter by searchTerm
export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const books = await getAllBooksService(searchTerm as string);
    res.status(200).json({
      message: 'Books retrieved successfully',
      success: true,
      data: books,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message, success: false });
  }
};

// Get a specific book by ID
export const getBookById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const book = await getBookByIdService(productId);
    res.status(200).json({
      message: 'Book retrieved successfully',
      success: true,
      data: book,
    });
  } catch (error: any) {
    const statusCode = error.message === 'Book not found' ? 404 : 500;
    res.status(statusCode).json({ message: error.message, success: false });
  }
};

// Update a book
export const updateBook = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;
    const updatedBook = await updateBookService(productId, updateData);
    res.status(200).json({
      message: 'Book updated successfully',
      success: true,
      data: updatedBook,
    });
  } catch (error: any) {
    const statusCode = error.message === 'Book not found' ? 404 : 400;
    res.status(statusCode).json({ message: error.message, success: false });
  }
};

// Delete a book
export const deleteBook = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    await deleteBookService(productId);
    res.status(200).json({
      message: 'Book deleted successfully',
      success: true,
      data: {},
    });
  } catch (error: any) {
    const statusCode = error.message === 'Book not found' ? 404 : 500;
    res.status(statusCode).json({ message: error.message, success: false });
  }
};
