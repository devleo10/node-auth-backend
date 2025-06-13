
# 🔐 Node.js JWT Authentication API

A secure RESTful API for user authentication and profile management with JWT, built with Node.js, Express, and MongoDB.

## 🌟 Features

- ✅ User registration & login with JWT
- 🔒 Protected routes (users can only access their profiles)
- 🗃️ MongoDB data storage
- 🔄 Profile management (CRUD operations)
- 🛡️ Password hashing with bcrypt
- 🚀 Ready for deployment

## 🔗 Quick Links

- [Live API on Render](https://node-auth-backend-9i88.onrender.com)
- [Postman Documentation](https://skillful-sailboat-072.notion.site/Postman-API-Documentation-for-Node-Auth-Backend-1c5378b5f42f80a4a33ce5c6e2db5dbd)
- [Deploy to Render](https://render.com/deploy)

---

## 🛠️ Setup Guide

### **1. Prerequisites**

- [Node.js (v18+)](https://nodejs.org/)
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) or local MongoDB
- [Postman](https://www.postman.com/) (for API testing)

### **2. Install Dependencies**

```bash
npm install
```

### **3. Configure Environment**

Create a `.env` file and add:

```ini
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/your-db?retryWrites=true&w=majority
JWT_SECRET=your_secure_secret_here
JWT_EXPIRES_IN=30d
```

### **4. Start Server**

#### Development:
```bash
npm run dev
```

#### Production:
```bash
npm start
```

---

## 📚 API Endpoints

### **Authentication**

| Method | Endpoint           | Description        | Request Body Example |
|--------|-------------------|--------------------|----------------------|
| POST   | `/api/auth/register` | Register new user | `{ "name": "Test", "email": "test@example.com", "password": "test123" }` |
| POST   | `/api/auth/login`  | Login user        | `{ "email": "test@example.com", "password": "test123" }` |

### **User Profile**

| Method | Endpoint         | Description            | Headers Required |
|--------|-----------------|------------------------|------------------|
| GET    | `/api/users/me` | Get current user profile | `Authorization: Bearer <JWT>` |
| PUT    | `/api/users/me` | Update user profile    | `Authorization: Bearer <JWT>` |

### 🔒 **Protected Routes (Middleware)**
To access protected routes, send a valid JWT token in the Authorization header.

```http
Authorization: Bearer <your_token_here>
```

If a user tries to access a protected route without a valid token, they will receive a `401 Unauthorized` response.

---

## 🧪 Testing Guide

### **Using Postman**
- Import Postman Collection
- Test flow: Register → Login → Profile Access

### **Using cURL**
#### Register User:
```bash
curl -X POST https://node-auth-backend-1.onrender.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"test123"}'
```

---

## 🚀 Deployment

### **Deploy to Render**
1. Click: [Deploy to Render](https://render.com/deploy)
2. Connect GitHub repo
3. Set environment variables:
   - `MONGO_URI`
   - `JWT_SECRET`
4. Deploy! 🚀

### **MongoDB Atlas Setup**
1. Create a free cluster
2. Whitelist IP `0.0.0.0/0`
3. Get connection URI from MongoDB Atlas

---

## 🚨 Troubleshooting

| Issue | Solution |
|--------|----------|
| 404 Errors | Check if the endpoint starts with `/api` |
| JWT Not Working | Verify `Authorization: Bearer <token>` header |
| Slow First Response | Render free tier has cold starts (~30s delay) |

---

## 📂 Project Structure

```bash
src/
├── controllers/     # Routinh logic
├── models/          # MongoDB schemas
├── routes/          # API endpoints
├── middleware/      # Auth & error handlers
├── utils/           # Helpers (JWT)
└── index.js         # Server setup
```

