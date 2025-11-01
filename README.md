🔐 PassOP – Your Secure Password Manager

🌐 Live Demo
[🔗 Visit the Live Website – PassOP](https://PassOP.netlify.app/)

🧭 Overview

PassOP is a secure, modern, and fully responsive password manager web application designed to help users safely store, manage, and access their passwords anytime, anywhere.
Built using React.js, Node.js, Express, and MongoDB, this full-stack project demonstrates strong frontend and backend integration with authentication, encryption, and CRUD functionality.

📌 Key Highlights

✅ Add, update, and delete saved passwords
✅ Secure login and signup system (with bcrypt encryption)
✅ Eye icon to toggle password visibility
✅ Copy password to clipboard
✅ Search and manage credentials efficiently
✅ Clean and responsive UI (desktop + mobile)
✅ Fully integrated backend with MongoDB Atlas

🚀 Technologies Used
🖥️ Frontend

⚛️ React.js (Vite) – Component-based UI framework

🎨 Tailwind CSS – Fast and modern styling

🧠 JavaScript (ES6+) – Client-side interactivity

🔄 Axios / Fetch API – Communication with backend

🛠️ Backend

⚡ Node.js – JavaScript runtime environment

🚀 Express.js – Server-side web framework

🗄️ MongoDB Atlas – Cloud database for storing encrypted credentials

🔐 bcrypt.js – Secure password hashing

🔑 jsonwebtoken (JWT) – Authentication & authorization

🌍 CORS – Cross-origin resource sharing

⚙️ dotenv – Manage environment variables securely

🧩 Features
Feature	Description
🔒 User Authentication	Secure registration and login using bcrypt & JWT
🗝️ Password Management: Save, edit, and delete credentials
👁️ Toggle Visibility	S: how/hide passwords with an eye icon
📋 Copy Function: Instantly copy credentials to the clipboard
🔍 Search Bar: Quickly find saved passwords
📱 Responsive Design	Works smoothly on all screen sizes
☁️ Cloud Integration	MongoDB Atlas for persistent storage
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
│
├── .gitignore
├── package-lock.json
├── package.json
└── README.md

```

🧠 How It Works

User registers with a username, email, and password (hashed with bcrypt).

On login, JWT tokens authenticate access to user-specific data.

Password entries are stored in MongoDB Atlas under each user’s ID.

The frontend allows users to add, edit, and delete credentials securely.

All API routes are protected — unauthorized users cannot access data.

🧰 Installation & Setup
✅ Prerequisites

Node.js (v18+ recommended)

MongoDB Atlas account

VS Code

⚙️ Backend Setup
# Clone repository
```
git clone https://github.com/Manas22-creator/PassOP.git
cd PassOP/backend
```
# Install dependencies
```
npm install
```

# Create .env file
```
MONGO_URI = your_mongodb_connection_string
JWT_SECRET = your_secret_key
PORT = 5000
```

# Start backend
```
npm start
```


Server runs at: http://localhost:5000

💻 Frontend Setup
```
cd ../
npm install
npm run dev
```


App runs at: http://localhost:5173
 (default Vite port)

📋 API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login existing user
GET	/api/passwords	Fetch all saved passwords
POST	/api/passwords	Add a new password entry
PUT	/api/passwords/:id	Update an existing password
DELETE	/api/passwords/:id	Delete a password entry
☁️ Deployment

Frontend: Render / Netlify / Vercel

Backend: Render / Railway / Cyclic

Database: MongoDB Atlas

Ensure CORS and API base URLs are configured correctly in production.

🖼️ Screenshots

(Add UI screenshots here – Login, Signup, Password Manager Dashboard, etc.)

🔮 Future Enhancements

📊 Password strength analyzer

🧩 Import/export passwords (CSV)

🌈 Dark mode

🧑‍💻 Admin panel for monitoring users

🔔 Email/password recovery system

🙌 Credits

Developed by Manas Pandey
A full-stack project showcasing secure authentication, data encryption, and modern frontend-backend integration.
