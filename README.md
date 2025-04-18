# 🔐 Secure REST API for User Authentication & Payments

This is a secure RESTful API built with **Express.js**, **MongoDB**, and **Stripe**, featuring user authentication, role-based access, and simulated payment handling.

## 🚀 Features

- User Registration & Login with JWT
- Password hashing using bcrypt
- Protected routes using JWT
- Simulated Stripe payments
- Transaction logging in MongoDB
- Error handling & validation
- Environment variable support via `.env`

---

## 🧰 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **JWT**
- **Bcrypt.js**
- **Stripe API**
- **Dotenv**

---

## 📁 How To Run
 
---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/auth-api.git
cd auth-api
```
2. Install Dependencies
 ```bash
   npm install
```
3. Set Up Environment Variables
Create a .env file in the root:
 ```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/authAPI
JWT_SECRET=your_jwt_secret
STRIPE_Api_KEY=your_stripe_secret_key
```

5. Start the Server
 ```bash
   npm run dev
```
🔐 API Endpoints:

Auth Routes:
Method  	Route	         Description
POST	  /auth/register	 Register a new user
POST	 /auth/login	    Login and receive JWT token
GET	  /auth/me	      Get current logged-in user

Payment Routes:

Method	 Route	             Description:
POST	  /payments/checkout	 Simulate Stripe payment (auth)

🛡️ All protected routes require an Authorization header:
Authorization: Bearer <your-token>


