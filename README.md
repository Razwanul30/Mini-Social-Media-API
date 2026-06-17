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
* View Users Who Liked a Post

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

Clone the repository:

```bash
git clone <repository-url>
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run the server:

```bash
npm run dev
```

Server URL:

```txt
http://localhost:5000
```

---

## API Endpoints

### Authentication

#### Register User

```http
POST /api/auth/register
```

Body:

```json
{
  "name": "Rizwan",
  "email": "rizwan@gmail.com",
  "password": "123456"
}
```

---

#### Login User

```http
POST /api/auth/login
```

Body:

```json
{
  "email": "rizwan@gmail.com",
  "password": "123456"
}
```

---

### Posts

#### Create Post

```http
POST /api/posts
```

Headers:

```txt
Authorization: Bearer <token>
```

Body:

```json
{
  "content": "My first post"
}
```

---

#### Get All Posts

```http
GET /api/posts
```

---

#### Update Post

```http
PUT /api/posts/:id
```

Headers:

```txt
Authorization: Bearer <token>
```

Body:

```json
{
  "content": "Updated content"
}
```

---

#### Delete Post

```http
DELETE /api/posts/:id
```

Headers:

```txt
Authorization: Bearer <token>
```

---

### Comments

#### Add Comment

```http
POST /api/posts/:id/comment
```

Headers:

```txt
Authorization: Bearer <token>
```

Body:

```json
{
  "text": "Nice post!"
}
```

---

### Likes

#### Toggle Like

```http
POST /api/posts/:id/like
```

Headers:

```txt
Authorization: Bearer <token>
```

---

## Project Structure

```txt
server
│
├── models
│   ├── User.js
│   └── Post.js
│
├── routes
│   ├── authRoutes.js
│   └── postRoutes.js
│
├── middleware
│   └── authMiddleware.js
│
├── config
│   └── db.js
│
├── .env
├── server.js
└── package.json
```

---

# Author

## Md. Razwanul Haque
### Begum Rokeya University, Rangpur

Built while learning the MERN Stack and backend development.
