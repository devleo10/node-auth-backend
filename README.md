# 🔐 Node.js JWT Authentication API

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-lightgrey)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-blue)](https://www.mongodb.com/atlas/database)
[![JWT](https://img.shields.io/badge/JWT-Auth-orange)](https://jwt.io/)

A secure RESTful API for user authentication and profile management with JWT, built with Node.js, Express, and MongoDB.

## 🌟 Features
- ✅ User registration & login with JWT
- 🔒 Protected routes (users can only access their profiles)
- 🗃️ MongoDB data storage
- 🔄 Profile management (CRUD operations)
- 🛡️ Password hashing with bcrypt
- 🚀 Ready for deployment

## 🔗 Quick Links
- [Live API on Render](https://node-auth-backend-1.onrender.com)
- [Postman Documentation](https://skillful-sailboat-072.notion.site/Postman-API-Documentation-for-Node-Auth-Backend-1c5378b5f42f80a4a33ce5c6e2db5dbd)
- [Deploy to Render](https://render.com/deploy)

---

## 🛠️ Complete Setup Guide

### Prerequisites
- [Node.js (v18+)](https://nodejs.org/)
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) or local MongoDB
- [Postman](https://www.postman.com/) (for API testing)

### 1. Clone Repository
```bash
## 🛠️ Setup Instructions

### 2. Install Dependencies
```bash
npm install
# Node.js Authentication API

A simple authentication API using Node.js, Express, MongoDB, and JWT.

---

## 📌 Installation & Setup

### **1. Install Dependencies**
```bash
npm install
2. Configure Environment
Create a .env file and add:

env
Copy
Edit
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/your-db?retryWrites=true&w=majority
JWT_SECRET=your_secure_secret_here
JWT_EXPIRES_IN=30d
3. Start Server
Development:
bash
Copy
Edit
npm run dev
Production:
bash
Copy
Edit
npm start
📚 API Endpoints
Authentication
Method	Endpoint	Description	Request Body Example
POST	/api/auth/register	Register new user	{"name":"Test","email":"test@example.com","password":"test123"}
POST	/api/auth/login	Login user	{"email":"test@example.com","password":"test123"}
User Profile
Method	Endpoint	Description	Headers Required
GET	/api/users/me	Get current user profile	Authorization: Bearer <JWT>
PUT	/api/users/me	Update user profile	Authorization: Bearer <JWT>
🧪 Testing Guide
Using Postman
Import Postman Collection

Test flow: Register → Login → Profile Access

Using cURL
Register User:
bash
Copy
Edit
curl -X POST https://node-auth-backend-1.onrender.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"test123"}'
🚀 Deployment
Deploy to Render
Click: Deploy to Render

Connect GitHub repo

Set environment variables:

MONGO_URI

JWT_SECRET

Deploy! 🚀

MongoDB Atlas Setup
Create a free cluster

Whitelist IP 0.0.0.0/0

Get connection URI from MongoDB Atlas

🚨 Troubleshooting
Issue	Solution
404 Errors	Check if the endpoint starts with /api
JWT Not Working	Verify Authorization: Bearer <token> header
Slow First Response	Render free tier has cold starts (~30s delay)
📂 Project Structure
bash
Copy
Edit
src/
├── controllers/     # Business logic
├── models/          # MongoDB schemas
├── routes/          # API endpoints
├── middleware/      # Auth & error handlers
├── utils/           # Helpers (JWT)
└── index.js         # Server setup
