Book Management REST API

Description

A simple REST API built using Node.js and Express to manage a collection of books. The API supports CRUD (Create, Read, Update, Delete) operations and stores data in memory without using a database.

Features

- Get all books
- Add a new book
- Update an existing book
- Delete a book
- JSON request and response handling
- RESTful API design

Technologies Used

- Node.js
- Express.js
- Postman
- VS Code

Installation

1. Clone the repository:

git clone <repository-link>

2. Navigate to the project folder:

cd book-management-api

3. Install dependencies:

npm install

Run the Server

node server.js

The server will start at:

http://localhost:3000

API Endpoints

Get All Books

GET /books

Add a New Book

POST /books

Example Request Body:

{
  "title": "Clean Code",
  "author": "Robert Martin"
}

Update a Book

PUT /books/:id

Delete a Book

DELETE /books/:id

Testing

Use Postman to test all API endpoints.

Learning Outcomes

- REST API fundamentals
- Express routing
- HTTP methods
- JSON handling
- CRUD operations
- Middleware usage
