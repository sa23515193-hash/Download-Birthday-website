import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Cake() {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const navigate = useNavigate();

  const handleBlowCandles = () => {
    setCandlesBlown(true);
    setTimeout(() => navigate("/visit/wishes"), 2500); // after animation
  };

  return (
    <div
      className={'cake-page ${candlesBlown ? "candles-out" : ""}'}
      onClick={handleBlowCandles}
    >
      <h2>{candlesBlown ? "🎉 Candles Blown! 🎉" : "Click anywhere to blow the candles 🎂"}</h2>
      <div className="cake-container">
        <div className="cake-body"></div>
        <div className="candles">
          <div className={'flame ${candlesBlown ? "hidden" : ""}'}></div>
          <div className={'flame ${candlesBlown ? "hidden" : ""}'}></div>
          <div className={'flame ${candlesBlown ? "hidden" : ""}'}></div>
        </div>
      </div>
    </div>
  );
}