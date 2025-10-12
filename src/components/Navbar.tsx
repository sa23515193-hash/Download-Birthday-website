import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">🎂 Birthday Dashboard</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/visit">Visit</Link></li>
        <li><Link to="/download">Download</Link></li>
      </ul>
    </nav>
  );
}