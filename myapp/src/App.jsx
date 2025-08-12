import { useState } from 'react';
import './App.css';
import Welcome from './Components/Welcome.jsx';
import Login from './Components/login.jsx';
import SignIn from './Components/Signin.jsx';
import Home from './Components/Home.jsx';
import Profile from './Components/profile.jsx';
import About from './Components/About.jsx';
import Articles from './Components/Articles.jsx';
import Contact from './Components/Contact.jsx';
import Join from './Components/Join.jsx';
import Creative from './Components/Creative.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        {/* public routes*/}
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />

        {/* protected routes */}
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/articles" element={<ProtectedRoute><Articles /></ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        <Route path="/join" element={<ProtectedRoute><Join /></ProtectedRoute>} />
        <Route path="/creative" element={<ProtectedRoute><Creative /></ProtectedRoute>} />
      </Routes>
    </Router>
  )
}

export default App
