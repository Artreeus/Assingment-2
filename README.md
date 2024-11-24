# Assingment-2
# **Book Store API**

The **Book Store API** is a RESTful web service that allows users to manage books in a store. It includes functionality to create, retrieve, update, and delete books, as well as advanced search and validation features. This API is built with **Node.js**, **Express.js**, and **MongoDB**, with **TypeScript** for type safety.

---

## **Features**
- **Book Management**: 
  - Add new books with detailed information (title, author, price, category, etc.).
  - Retrieve all books or filter books using search terms.
  - Update book details by ID.
  - Delete books by ID.
- **Validation**: 
  - Enforces strong validation for inputs using **Mongoose** schemas.
- **Error Handling**:
  - Graceful error handling for both validation and runtime issues.
- **Search Functionality**:
  - Search books by title, author, or category using case-insensitive queries.
- **Built with TypeScript**:
  - Ensures type safety and better code maintainability.

---

## **Getting Started**

Follow these instructions to set up the project on your local machine for development and testing purposes.

### **Prerequisites**
- [Node.js](https://nodejs.org/) (v18 or later)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [Git](https://git-scm.com/)
- A package manager like [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/Artreeus/Assingment-2.git
   cd book-store-api
   npm install
   npm run build
   npm run start:prod
