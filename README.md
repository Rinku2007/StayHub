# 🌍 StayHub – Travel Listing Web App

![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)
![Node.js](https://img.shields.io/badge/Runtime-Node.js-green)
![Express.js](https://img.shields.io/badge/Framework-Express-black)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![EJS](https://img.shields.io/badge/Template-EJS-red)
![Cloudinary](https://img.shields.io/badge/Image%20Upload-Cloudinary-blue)
![Render](https://img.shields.io/badge/Deployment-Render-purple)

## 📌 Description
StayHub is a full-stack web application that allows users to explore, create, and manage travel listings such as stays, destinations, and experiences. Users can sign up, log in, add listings, upload images, and leave reviews.

---

## 🌐 Live Preview
👉 Live Demo: https://stayhub-6.onrender.com/listings

---

## 🚀 Features
- 🔐 User Authentication (Signup/Login/Logout)
- 🏡 Create, Read, Update, Delete Listings (CRUD)
- 📸 Image Upload using Cloudinary
- ⭐ Review and Rating System
- 🔍 Search & Filter Listings
- 📍 Search Listings by Location
- 📱 Responsive Design (Mobile + Desktop)
- ⚡ Fast and dynamic UI

---

## 👥 Multi-User Roles System

- 👨‍💼 **Admin** – Manage all users and listings  
- 🏠 **Lister (Host)** – Add and manage property listings  
- 🙋‍♂️ **User (Guest)** – Browse and book listings  

---

## 📌 Future Enhancements

- 💳 Online Payment Integration  
- 📅 Booking System  
- ❤️ Wishlist Feature  
- 🔔 Notifications  
- 🌙 Dark Mode  

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3 / Tailwind CSS
- JavaScript
- EJS (Embedded JavaScript Templates)

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

### Tools & Services
- Cloudinary (Image Upload)
- Git & GitHub (Version Control)
- Render (Deployment)

---

## 📂 Project Structure

```
StayHub/
│── models/          # Mongoose schemas
│── routes/          # Express routes
│── controllers/     # Business logic
│── views/           # EJS templates
│── public/          # Static files (CSS, JS, images)
│── middleware/      # Custom middleware
│── utils/           # Utility functions
│── app.js           # Main server file
│── package.json
│── .env
```

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/StayHub.git
cd StayHub
```

### 2. Install dependencies
npm install


### 3. Create a `.env` file in root folder and add:

```env
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
SECRET=your_session_secret
```

### 4. Run the project
npm start

### 5. Open in browser
http://localhost:3000
