# Personal Expense Tracker

A full-stack Expense Tracker web application built using the **MERN Stack (MongoDB, Express.js, React, Node.js)**. The application allows users to securely register, log in, and manage their personal income and expenses with JWT authentication.

---

## Features

- User Registration
- User Login with JWT Authentication
- Password Encryption using bcrypt
- Add Transactions
- View Transactions
- Edit Transactions
- Delete Transactions
- User-specific transaction management
- MongoDB Database Integration
- RESTful API using Express.js


## Tech Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JWT (JSON Web Token)
- bcryptjs

### Tools
- Git
- GitHub
- Thunder Client
- MongoDB Compass
- VS Code

## Project Structure

```
personal_expense_tracker/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── src/
│   ├── components/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/sameerafathima2104/personal-expense-tracker.git
```

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

---

## Authentication

- Passwords are securely hashed using **bcryptjs**.
- Authentication is implemented using **JWT (JSON Web Tokens)**.
- Protected routes ensure users can only access their own transactions.


## Future Improvements

- Date picker for transactions
- Categories (Food, Shopping, Travel, etc.)
- Expense Charts & Analytics
- Search and Filters
- Dark Mode
- Deployment using Vercel, Render, and MongoDB Atlas


## Author

SAMEERA FATHIMA

GitHub:
https://github.com/sameerafathima2104

---

## Project Status

Completed (Version 1.0)

This project demonstrates a complete MERN stack application with authentication, CRUD operations, REST APIs, MongoDB integration, and secure user-specific data management.
