// product.service.ts
import { Book } from './book.model';
import { TBook } from './book.interface';

// Create a book
export const createBookService = async (bookData: TBook) => {
  return await Book.create(bookData);
};

// Get all books or filter by searchTerm
export const getAllBooksService = async (searchTerm?: string) => {
  if (searchTerm) {
    return await Book.find({
      $or: [
        { title: { $regex: searchTerm, $options: 'i' } },
        { author: { $regex: searchTerm, $options: 'i' } },
        { category: { $regex: searchTerm, $options: 'i' } },
      ],
    });
  }
  return await Book.find();
};

// Get a specific book by ID
export const getBookByIdService = async (bookId: string) => {
  const book = await Book.findById(bookId);
  if (!book) {
    throw new Error('Book not found');
  }
  return book;
};

// Update a book
export const updateBookService = async (bookId: string, updateData: Partial<TBook>) => {
  const book = await Book.findByIdAndUpdate(
    bookId,
    { $set: updateData },
    { new: true, runValidators: true }
  );
  if (!book) {
    throw new Error('Book not found');
  }
  return book;
};

// Delete a book
export const deleteBookService = async (bookId: string) => {
  const book = await Book.findByIdAndDelete(bookId);
  if (!book) {
    throw new Error('Book not found');
  }
  return book;
};
