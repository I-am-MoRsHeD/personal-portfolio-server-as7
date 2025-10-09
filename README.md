

```markdown
# 🧠 B5A7 - Personal Portfolio API (Backend)

This is the **backend API** for my personal portfolio project.  
It is built with **Node.js (Express)**, **TypeScript**, and **Prisma ORM** using a **PostgreSQL** database.  
The backend provides secure CRUD operations for **blogs**, **projects**, and **authentication**.

---

## 🚀 Live API

🔗 **Backend Base URL:** [https://personal-portfolio-server-as7.vercel.app/](https://personal-portfolio-server-as7.vercel.app/)

---

## ⚙️ Tech Stack

| Category | Technology |
|-----------|-------------|
| Language | TypeScript |
| Framework | Express.js |
| ORM | Prisma |
| Database | PostgreSQL |
| Authentication | JWT + bcrypt |
| Deployment | Render / Railway / Vercel Functions |

---

## 🧩 Features

### 👥 Public Endpoints
- `GET /blog` → Get all blogs
- `GET /blog/:id` → Get a single blog by ID
- `GET /project` → Get all projects
- `GET /about` → Get personal details

### 🔐 Private Endpoints (Owner Only)
- `POST /auth/login` → Authenticate owner (JWT)
- `GET /auth/me` → Get logged-in owner info
- `POST /blog` → Create new blog
- `PATCH /blog/:blogId` → Update existing blog
- `DELETE /blog/:blogId` → Delete a blog
- `POST /project` → Create new project
- `PATCH /project/:projectId` → Update project
- `DELETE /project/:projectId` → Delete project

---

## 🧠 Authentication Flow

1. Owner logs in using seeded credentials (`email` + `password`).
2. Server validates credentials using **bcrypt**.
3. Generates a **JWT token**, stored in secure cookies.
4. Protected routes validate JWT before allowing access.

---

## 🔐 Environment Variables

Create a `.env` file in the root:

```env
# Server
PORT="5000"
NODE_ENV="development"

DATABASE_URL=your_database_url

FRONTEND_URL=your_frontend_url


OWNER_EMAIL=owner_email
OWNER_PASS=password

#bcryptjs
BCRYPT_SALT_ROUNDS=bcrypt_salt_rounds

#jwt
JWT_ACCESS_SECRET=access_token_secret
JWT_ACCESS_EXPIRES=days
JWT_REFRESH_SECRET=refresh_token_secret
JWT_REFRESH_EXPIRES=days

# Cloudinary Api keys
CLOUDINARY_CLOUD_NAME=cloud_name
CLOUDINARY_API_KEY=cloudinary_api_key
CLOUDINARY_API_SECRET=cloudinary_secret_key
```
