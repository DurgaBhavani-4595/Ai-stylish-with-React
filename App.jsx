import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import StylePreferences from "./StylePreferences";
import Login from "./Login";
import './Style.css';  // Correct CSS import

function App() {
  return (
    <Router>
      <header>
        <div className="logo">👗 AI Boutique</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/preferences">Features</Link></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><Link to="/login">Log In</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preferences" element={<StylePreferences />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <footer>
        <p>&copy; 2025 AI Boutique. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
