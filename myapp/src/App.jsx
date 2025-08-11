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

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<Join />} />
        <Route path="/creative" element={<Creative />} />
      </Routes>
    </Router>
  )
}

export default App
