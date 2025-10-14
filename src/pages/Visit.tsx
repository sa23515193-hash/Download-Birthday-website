import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../App.css";

export default function Visit() {
  const [stage, setStage] = useState<"intro" | "countdown" | "gift" | "cake" | "wishes">("intro");
  const [count, setCount] = useState(10);
  const [candlesLit, setCandlesLit] = useState(true);
  const navigate = useNavigate();

  // Countdown Logic
  useEffect(() => {
    if (stage === "countdown" && count > 0) {
      const timer = setTimeout(() => setCount((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (stage === "countdown" && count === 0) {
      setTimeout(() => setStage("gift"), 800);
    }
  }, [count, stage]);

  // 🎀 Handlers
  const startCountdown = () => setStage("countdown");
  const openGift = () => setStage("cake");
  const blowCandles = () => {
    setCandlesLit(false);
    setTimeout(() => setStage("wishes"), 1500);
  };

  // 🎂 Stages Rendering
  return (
    <div className="visit-page">
      {stage === "intro" && (
        <div className="visit-stage">
          <h1 className="visit-title">🎉 Happy Birthday Dear!</h1>
          <p className="visit-sub">To become 18 years old 🥳</p>
          <button className="visit-btn" onClick={startCountdown}>
            Open Here
          </button>
        </div>
      )}

      {stage === "countdown" && (
        <div className="visit-stage">
          <h2 className="count-number">{count}</h2>
        </div>
      )}

      {stage === "gift" && (
        <div className="visit-stage">
          <div className="gift-box" onClick={openGift}>
            🎁
          </div>
          <p className="hint-text">Click to Open Gift</p>
        </div>
      )}

      {stage === "cake" && (
        <div className="visit-stage" onClick={blowCandles}>
          <div className="cake">
            🎂
            {candlesLit ? <div className="flame">🔥🔥🔥</div> : <p className="out-text">Candles Blown!</p>}
          </div>
          <p className="hint-text">Click Anywhere to Blow Candles</p>
        </div>
      )}

      {stage === "wishes" && (
        <div className="visit-stage wishes-stage">
          <h2>💖 Happy Birthday Dear! </h2>
          <p>May your 18th year bring joy, success, and endless smiles 🎈</p>
          <button className="visit-btn" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      )}

    </div>
  );
}