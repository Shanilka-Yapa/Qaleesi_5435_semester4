# Qaleesi

Qaleesi is a **community-oriented MERN web application** designed to provide a platform for learning, self-expression, creative contributions, and volunteering.

Users can explore community information, manage their profiles, get in touch with the community, participate in volunteering activities, and contribute creative content.

---

## Features

* 🏠 **Home**

  * Community-focused landing page
  * Provides access to the main sections of the platform

* 🔐 **Authentication**

  * User registration
  * User login
  * Account management

* 👤 **User Profile**

  * Protected profile page
  * User-specific information

* ℹ️ **Information**

  * Provides information about the community and platform

* 📞 **Contact**

  * Allows users to submit contact-related information
  * Communicates with the backend API

* 🤝 **Join**

  * Allows visitors to participate and volunteer
  * Form submissions are processed through the backend

* 🎨 **Creative Space**

  * Allows users to contribute creative content
  * Submissions are sent to the backend API

---

## System Architecture

The following diagram illustrates the overall architecture of Qaleesi, including the React frontend, Express backend, API communication, and MongoDB data layer.

<p align="center">
  <img src="qalessi-architecture.png" alt="Qaleesi System Architecture" width="850">
</p>

---

## Technology Stack

### Frontend

* **React**
* **React Router**
* HTML
* CSS
* JavaScript

### Backend

* **Node.js**
* **Express.js**

### Database

* **MongoDB**

### Architecture

```text
Client → React → Express API → MongoDB
```

---

## Project Structure

A simplified project structure is:

```text
Qaleesi/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── ...
│   │   └── App.jsx
│   └── package.json
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── ...
│   └── server.js
│
├── assets/
│   └── qaleesi-architecture.png
│
└── README.md
```

---

# Getting Started

## Prerequisites

Make sure the following are installed:

* [Node.js](https://nodejs.org/)
* npm
* MongoDB
* Git

Check the installations:

```bash
node --version
npm --version
git --version
```

---

# Installation

## 1. Clone the Repository

```bash
git clone <YOUR-REPOSITORY-URL>
```

Move into the project directory:

```bash
cd Qaleesi
```

---

## 2. Install Frontend Dependencies

Move into the frontend directory:

```bash
cd client
```

Install the dependencies:

```bash
npm install
```

---

## 3. Install Backend Dependencies

Open another terminal and move into the backend directory:

```bash
cd server
```

Install the dependencies:

```bash
npm install
```

---

# Environment Variables

The backend requires environment variables for configuration.

Create a `.env` file inside the `server` directory:

```text
server/
└── .env
```

Add the required configuration:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

> Do not commit the `.env` file to GitHub. Add it to `.gitignore`.

Example:

```text
.env
node_modules/
```

---

# Running the Application

Qaleesi consists of two parts:

```text
React Frontend
       ↓
Express Backend
       ↓
MongoDB
```

Both the frontend and backend need to be running during development.

## 1. Start the Backend

From the `server` directory:

```bash
npm start
```

If the project uses a development script:

```bash
npm run dev
```

The Express server will start on the configured port.

For example:

```text
http://localhost:5000
```

---

## 2. Start the Frontend

Open another terminal and move into the frontend directory:

```bash
cd client
```

Start the React development server:

```bash
npm start
```

If the project uses Vite:

```bash
npm run dev
```

The terminal will display the local development URL.

For example:

```text
http://localhost:3000
```

or

```text
http://localhost:5173
```

Open the displayed URL in your browser.

---

# API Communication

The frontend communicates with the Express backend through HTTP requests.

The main visible flows include:

```text
Contact Page
     ↓
React Frontend
     ↓
Express API
     ↓
MongoDB
```

```text
Join Page
     ↓
React Frontend
     ↓
Express API
     ↓
MongoDB
```

```text
Creative Space
     ↓
React Frontend
     ↓
Express API
     ↓
MongoDB
```

Account-related routes and models are also implemented for user management and authentication.

---

# Application Flow

Visitors initially access public pages such as:

```text
Welcome
   ↓
Login / Registration
   ↓
Home
```

Authenticated users can access protected areas such as:

```text
Home
 ├── Profile
 ├── Information
 ├── Contact
 ├── Join
 └── Creative Space
```

Protected routes are handled through **React Router**.

---

# Development

To modify the project:

### Frontend

```bash
cd client
npm install
npm start
```

### Backend

```bash
cd server
npm install
npm start
```

Make sure MongoDB is available and the backend `.env` configuration is correct.

---

# Troubleshooting

## `npm` is not recognized

Install Node.js and restart your terminal.

Verify:

```bash
node --version
npm --version
```

---

## Dependencies are missing

Run:

```bash
npm install
```

inside both the `client` and `server` directories.

---

## MongoDB connection error

Check that:

* MongoDB is running
* `MONGO_URI` is correct
* The `.env` file is inside the `server` directory
* Your MongoDB credentials are correct if using MongoDB Atlas

---

## Frontend cannot connect to backend

Check that:

1. The Express server is running.
2. The frontend is using the correct API URL.
3. The backend port matches the configured API endpoint.
4. CORS configuration allows requests from the frontend.

---

# License

This project was developed as an academic/project application.

---

## Author

**Shanilka T. Yapa**

Computer Engineering Undergraduate
University of Ruhuna
