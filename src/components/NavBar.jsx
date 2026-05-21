// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <nav className="navbar">
      <span className="brand">Benny</span>
      <ul className="nav-links">
        <li><Link to="/" className={isActive("/")}>Home</Link></li>
        <li><Link to="/about" className={isActive("/about")}>About</Link></li>
        <li><Link to="/contact" className={isActive("/contact")}>Contact</Link></li>
      </ul>
    </nav>
  );
}