# 🚀 User CRUD REST API

A RESTful User Management API built with **Node.js, Express.js, TypeScript, Prisma ORM, and MongoDB**.

This project implements complete CRUD (Create, Read, Update, Delete) operations to manage user information through RESTful API endpoints.

---

## ✨ Features

### 👤 User Management

- Create a new user.
- Retrieve all users.
- Retrieve a single user by ID.
- Update user information.
- Delete a user by ID.

### ✅ Validation & Error Handling

- Validate required user fields.
- Ensure email addresses are unique.
- Handle users that do not exist.
- Return appropriate HTTP status codes.
- Provide structured error responses.

### 🛠️ Database Integration

- MongoDB database integration using Prisma ORM.
- MongoDB ObjectId-based user IDs.
- Type-safe development with TypeScript.

---

## 🛠️ Technologies Used

| Technology | Purpose                     |
| ---------- | --------------------------- |
| Node.js    | JavaScript runtime          |
| Express.js | REST API framework          |
| TypeScript | Type-safe development       |
| Prisma ORM | Database access and queries |
| MongoDB    | NoSQL database              |
| Postman    | API testing                 |

---

## 📌 User Model

Each user contains the following fields:

| Field | Type   | Requirement         |
| ----- | ------ | ------------------- |
| id    | String | MongoDB ObjectId    |
| name  | String | Required            |
| email | String | Required and unique |
| age   | Int    | Required            |

---

## 🌐 API Endpoints

Base URL (local development):

http://localhost:8080/api/v1/users or http://localhost:5000/api/v1/users

Replace `8080` or `5000` with your configured server port if necessary.

| Method   | Endpoint         | Description           |
| -------- | ---------------- | --------------------- |
| `POST`   | `/api/users`     | Create a user         |
| `GET`    | `/api/users`     | Retrieve all users    |
| `GET`    | `/api/users/:id` | Retrieve a user by ID |
| `PATCH`  | `/api/users/:id` | Update a user         |
| `DELETE` | `/api/users/:id` | Delete a user         |

### 1. Create User

**POST** `/api/users`

Request body:

```json
{
  "name": "Rohan",
  "email": "rohan@gmail.com",
  "age": 21
}
```

Creates a new user in the database.

### 2. Get All Users

**GET** `/api/users`

Retrieves the list of users stored in the database.

### 3. Get Single User

**GET** `/api/users/:id`

Example:

```text
GET /api/users/68d123456789abcdef123456
```

Retrieves a specific user using their ID.

### 4. Update User

**PATCH** `/api/users/:id`

Request body:

```json
{
  "name": "Rohanul Haque",
  "age": 22
}
```

Updates the provided fields of an existing user. Other fields remain unchanged unless the implementation specifies otherwise.

### 5. Delete User

**DELETE** `/api/users/:id`

Example:

```text
DELETE /api/users/6945e5742d200df9b6bb30a9
```

Deletes a user from the database using their ID.

---

## ⚙️ Installation & Setup

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) — local instance or MongoDB Atlas
- [Git](https://git-scm.com/)
- [Postman](https://www.postman.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/rohanul-haque/Assignment-01.git
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root and configure your MongoDB connection string.

```env
PORT=8080
DATABASE_URL="YOUR_MONGODB_CONNECTION_STRING"
NODE_ENV=development
LOG_LEVEL=info

```

Replace the placeholder with your actual MongoDB connection string.

### 5. Configure Prisma

Make sure your `prisma/schema.prisma` contains the required MongoDB datasource and User model.

For example:

```prisma
generator client {
  provider = "prisma-client"
  output   = "../src/generated/prisma"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model User {
  id    String @id @default(auto()) @map("_id") @db.ObjectId
  name  String
  email String @unique
  age   Int
}
```

The generator output path should match your project's actual directory structure and Prisma version.

### 6. Generate Prisma Client

```bash
npx prisma generate
```

### 7. Start the Development Server

```bash
npm run dev
```

The API will be available at:

```text
http://localhost:8080 or http://localhost:5000
```

Use the port configured in your environment variables.

---

## 🧪 API Testing with Postman

Test all five endpoints using Postman.

- Create a user — `POST /api/v1/users`
- Retrieve all users — `GET /api/v1/users`
- Retrieve a single user — `GET /api/v1/users/:id`
- Update a user — `PATCH /api/v1/users/:id`
- Delete a user — `DELETE /api/v1/users/:id`

Also verify important edge cases:

- Missing required fields.
- Invalid user ID.
- User not found.
- Duplicate email address.
- Successful creation, retrieval, update, and deletion.

---

## 📁 Project Structure

Example structure — adjust it to match your actual project:

```text
crud
├── 📁 generated
│   └── 📁 prisma
│       ├── 📁 internal
│       │   ├── 📄 class.ts
│       │   ├── 📄 prismaNamespace.ts
│       │   └── 📄 prismaNamespaceBrowser.ts
│       ├── 📁 models
│       │   └── 📄 User.ts
│       ├── 📄 browser.ts
│       ├── 📄 client.ts
│       ├── 📄 commonInputTypes.ts
│       ├── 📄 enums.ts
│       ├── 📄 models.ts
│       └── 📄 query_engine-windows.dll.node
├── 📁 prisma
│   └── 📄 schema.prisma
├── 📁 src
│   ├── 📁 config
│   │   └── 📄 index.ts
│   ├── 📁 lib
│   │   ├── 📄 corsOptions.ts
│   │   ├── 📄 expressRateLimit.ts
│   │   ├── 📄 prisma.ts
│   │   └── 📄 winston.ts
│   ├── 📁 middlewares
│   │   ├── 📄 globalErrorHandler.ts
│   │   └── 📄 notFoundRoute.ts
│   ├── 📁 modules
│   │   └── 📁 user
│   │       ├── 📄 user.controller.ts
│   │       ├── 📄 user.interface.ts
│   │       ├── 📄 user.routes.ts
│   │       └── 📄 user.service.ts
│   ├── 📁 routes
│   │   └── 📄 index.ts
│   ├── 📁 utils
│   │   ├── 📄 API_MESSAGES.ts
│   │   ├── 📄 ERROR_CODE.ts
│   │   ├── 📄 appError.ts
│   │   ├── 📄 asyncHandler.ts
│   │   └── 📄 sendResponse.ts
│   ├── 📄 app.ts
│   └── 📄 server.ts
├── ⚙️ .gitignore
├── ⚙️ .prettierignore
├── ⚙️ .prettierrc
├── ⚙️ nodemon.json
├── ⚙️ package-lock.json
├── ⚙️ package.json
├── 📄 prisma.config.ts
├── 📝 readme.md
└── ⚙️ tsconfig.json
```

---

## 🎯 Learning Outcomes

Through this assignment, I practiced:

- Building RESTful APIs with Express.js.
- Using TypeScript for type-safe backend development.
- Connecting MongoDB with Prisma ORM.
- Implementing Create, Read, Update, and Delete operations.
- Handling validation errors and missing resources.
- Testing API endpoints with Postman.
- Managing environment variables and project configuration.

---

## 👨‍💻 Author

**Rohanul Haque Rohan**

MERN Stack Developer

- GitHub: [github.com/rohanul-haque](https://github.com/rohanul-haque)
- LinkedIn: [linkedin.com/in/md-rohanul-haque](https://www.linkedin.com/in/md-rohanul-haque/)

---

⭐ If you find this project useful, consider giving the repository a star!
