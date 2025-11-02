🔐 PassOP – Your Secure Password Manager

🌐 Live Demo  
🔗 **Frontend:** [https://passop-6l55.onrender.com](https://passop-6l55.onrender.com)  
🔗 **Backend API:** [https://passop-7qba.onrender.com](https://passop-7qba.onrender.com) 

---

🧭 Overview

**PassOP** is a secure, modern, and fully responsive **MERN Stack Password Manager** web application that helps users safely store, manage, and access their credentials anytime, anywhere.  
It’s built using **React.js (Vite)**, **Node.js**, **Express.js**, and **MongoDB Atlas**, demonstrating strong frontend–backend integration with CRUD operations and RESTful API communication.

---
📌 Key Highlights

✅ Add, update, and delete saved passwords  
✅ Eye icon to toggle password visibility  
✅ Copy credentials to clipboard  
✅ Search and manage passwords efficiently  
✅ Clean, responsive UI (desktop + mobile)  
✅ Backend integrated with MongoDB Atlas  
✅ Hosted on Render (Full-Stack Deployment)

---

🚀 Technologies Used

🖥️ Frontend
- ⚛️ **React.js (Vite)** – Component-based UI framework  
- 🎨 **Tailwind CSS** – Fast, modern styling  
- 🧠 **JavaScript (ES6+)** – Interactive client-side logic  
- 🔄 **Fetch API** – Communicating with backend REST API  

🛠️ Backend
- ⚡ **Node.js** – JavaScript runtime environment  
- 🚀 **Express.js** – Lightweight web server framework  
- 🗄️ **MongoDB Atlas** – Cloud database for password storage  
- 🔑 **dotenv** – Environment variable management  
- 🌍 **CORS** – Cross-origin resource sharing  

---

🧩 Features

| Feature | Description |
|----------|-------------|
| 🔒 Password Management | Add, edit, and delete credentials securely |
| 👁️ Toggle Visibility | Show/hide passwords using eye icon |
| 📋 Copy Function | Instantly copy passwords to clipboard |
| 🔍 Search & Filter | Quickly find stored credentials |
| 📱 Responsive Design | Works seamlessly across devices |
| ☁️ Cloud Integration | Data stored securely in MongoDB Atlas |

---
📂 Project Structure
```bash

PassOP/
├── backend/
│   ├── node_modules/
│   ├── .env
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── dist/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Manager.jsx
│   │   │   └── Navbar.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── assets/
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
│   └── .env
│
├── .gitignore
├── package-lock.json
├── package.json
└── README.md

```

🧠 How It Works

1. The backend provides RESTful APIs for storing and retrieving passwords.  
2. The frontend fetches and displays credentials using secure endpoints.  
3. All passwords are stored in **MongoDB Atlas**.  
4. The app supports CRUD (Create, Read, Update, Delete) operations.  
5. Fully deployed backend + frontend with CORS-enabled API calls.

---

🧰 Installation & Setup

✅ Prerequisites
- Node.js (v18+ recommended)  
- MongoDB Atlas account  
- VS Code  


⚙️ Backend Setup
```bash
# Clone repository
git clone https://github.com/Manas22-creator/PassOP.git
cd PassOP/backend

# Install dependencies
npm install

# Create .env file
MONGO_URI=your_mongodb_connection_string
PORT=3000

# Start backend
npm start
# Server runs at http://localhost:3000
```

💻 Frontend Setup
```
cd ../frontend

# Install dependencies
npm install

# Run frontend (development)
npm run dev
# App runs at http://localhost:5173

```

---

App runs at: http://localhost:5173
 (default Vite port)

📋 API Endpoints
Method	Endpoint	Description
GET	/	Fetch all saved passwords
POST	/	Add a new password entry
DELETE	/	Delete a password by ID

---
☁️ Deployment
Layer	Platform	URL
Frontend	Render (Static Site)	https://passop-6l55.onrender.com

Backend	Render (Web Service)	https://passop-7qba.onrender.com

Database	MongoDB Atlas	Cloud-hosted database

Ensure CORS and environment variables are configured correctly for production.

---

🖼️ Screenshots

(Add UI screenshots here – Login, Signup, Password Manager Dashboard, etc.)

---

🔮 Future Enhancements

📊 Password strength analyzer
🧩 Import/exort passwords (CSV)
🌈 Dark mode
🧑‍💻 Admin panel for monitoring users
🔔 Email/password recovery system

---

🙌 Credits

Developed by Manas Pandey

🎓 First Year M.Sc. IT | 💻 Full Stack (MERN) Developer

A full-stack MERN project showcasing secure CRUD operations, REST API integration, and responsive UI/UX — deployed seamlessly using Render.
