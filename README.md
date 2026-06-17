# Mini Social Media API

A simple social media backend built with Node.js, Express, MongoDB, Mongoose, JWT Authentication, and Bcrypt.

## Features

### Authentication

* User Registration
* User Login
* Password Hashing with Bcrypt
* JWT Authentication
* Protected Routes

### Posts

* Create Post
* Get All Posts
* Update Own Post
* Delete Own Post

### Comments

* Add Comment to a Post
* Comment User Population

### Likes

* Like a Post
* Unlike a Post

---

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT (jsonwebtoken)
* bcryptjs
* dotenv
* cors

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd server
```

### Install Dependencies

```bash
npm install
```

### Create .env File

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Run Server

```bash
npm run dev
```

Server runs on:

```txt
http://localhost:5000
```

---

## API Endpoints

### Authentication

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | /api/auth/register |
| POST   | /api/auth/login    |

### Posts

| Method | Endpoint       |
| ------ | -------------- |
| POST   | /api/posts     |
| GET    | /api/posts     |
| PUT    | /api/posts/:id |
| DELETE | /api/posts/:id |

### Comments

| Method | Endpoint               |
| ------ | ---------------------- |
| POST   | /api/posts/:id/comment |

### Likes

| Method | Endpoint            |
| ------ | ------------------- |
| POST   | /api/posts/:id/like |

---

## Project Structure

```txt
server/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   └── postController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── User.js
│   └── Post.js
│
├── routes/
│   ├── authRoutes.js
│   └── postRoutes.js
│
├── .env
├── .gitignore
├── package.json
└── server.js
```

---

## Author

**Md. Razwanul Haque**
Begum Rokeya University, Rangpur

Built while learning the MERN Stack and Backend Development.
