# 🥾 Pico-Trial-Web-App

A MERN stack web application that helps both foreigners and locals get accurate and detailed information about Pico hiking trails before they begin their hike. Users can interact with the admin by asking questions, and the admin can respond through the platform.

---

## 📌 Project Overview

**Pico-Trial-Web-App** is built to assist hikers with:
- Trail-specific insights (conditions, difficulty, safety)
- Real-time admin communication
- Clean, responsive user interface
- Secure authentication and access control

This project demonstrates a modern full-stack web app using the MERN stack, TypeScript, and ShadCN UI, with Framer Motion for smooth transitions and animations.

---

## ⚙️ Tech Stack

| Layer     | Tech                                |
|-----------|-------------------------------------|
| Frontend  | React + Vite + TypeScript + ShadCN UI + Framer Motion |
| Backend   | Node.js + Express.js                |
| Database  | MongoDB                             |
| Auth      | JWT-based Authentication            |
| Styling   | Tailwind CSS                        |
| Animation | Framer Motion                       |

---

## 📂 Folder Structure

```bash
Pico-Trial-Web-App/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── context/
│   │   ├── services/  # API services
│   │   └── App.tsx
│   ├── vite.config.ts
│   └── .env
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── .env

```

## 🔐 Frontend .env
VITE_API_BASE_URL=http://localhost:5000/api

## 🔐 Backend .env
PORT=5000
MONGO_URI=mongodb://localhost:27017/pico-trails
JWT_SECRET=your_jwt_secret

## 📦 Clone the repository
git clone https://github.com/your-username/Pico-Trial-Web-App.git <br>
cd Pico-Trial-Web-App

## ⚙️ Configure .env files
Create .env in both the frontend and backend directories using the values above.

## 🚀 Run the project
Run Backend
```bash
cd backend
npm run dev
```

Run Frontend
```bash
cd frontend
npm run dev
```

## 📡 API Overview

| Method | Endpoint             | Description                  |
| ------ | -------------------- | ---------------------------- |
| POST   | `/api/auth/register` | Register a new user          |
| POST   | `/api/auth/login`    | Authenticate and get JWT     |
| GET    | `/api/trails`        | Get list of available trails |
| POST   | `/api/questions`     | Ask a question to the admin  |
| GET    | `/api/questions/:id` | Admin retrieves questions    |
| POST   | `/api/answers`       | Admin responds to questions  |

## 👨‍💻 Author

Name: Ravindu Perera <br>
GitHub: @RavinduSperera
