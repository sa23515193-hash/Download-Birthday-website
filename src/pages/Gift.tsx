import { Link } from "react-router-dom";
import "../App.css";

export default function Gift() {
  return (
    <div className="gift-page">
      <div className="gift-box">
        <h2>🎁 A special surprise for you!</h2>
        <p>Click below to open your gift 💖</p>
        <Link to="/visit/cake" className="open-btn">Open Gift</Link>
      </div>
    </div>
  );
}