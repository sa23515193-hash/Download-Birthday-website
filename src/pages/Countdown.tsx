// src/pages/Countdown.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Countdown() {
  const [count, setCount] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      navigate("/visit/gift");
    }
  }, [count, navigate]);

  return (
    <div className="countdown-page">
      <h2>Get Ready 🎈</h2>
      <h1>{count}</h1>
    </div>
  );
}