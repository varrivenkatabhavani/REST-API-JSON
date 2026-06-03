const express = require("express");
const app = express();

app.use(express.json());

let books = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
  { id: 2, title: "Atomic Habits", author: "James Clear" }
];

// GET all books
app.get("/books", (req, res) => {
  res.status(200).json(books);
});

// POST a new book
app.post("/books", (req, res) => {
  const { title, author } = req.body;

  const newBook = {
    id: books.length + 1,
    title,
    author,
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT update a book
app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  book.title = req.body.title || book.title;
  book.author = req.body.author || book.author;

  res.status(200).json(book);
});

// DELETE a book
app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = books.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  books.splice(index, 1);

  res.status(200).json({ message: "Book deleted successfully" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});