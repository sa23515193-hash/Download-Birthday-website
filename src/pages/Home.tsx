import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <video autoPlay loop muted className="bg-video">
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="overlay">
          <h1>🎉 Welcome to Birthday Celebration World 🎂</h1>
          <p>Experience a personalized surprise journey full of love and joy 💖</p>

          <div className="buttons">
            <Link to="/visit" className="btn-main">Visit Demo</Link>
            <Link to="/download" className="btn-secondary">Download Custom Website</Link>
          </div>
        </div>
      </section>
   <div style={{ textAlign: "center", marginTop: "20px" }}>
      <iframe
        src="https://otieu.com/4/10030305"
        style={{ width: "300px", height: "400px", border: "purpule", overflow: "hidden" }}
        scrolling="no"
        title="Birthday Ad"
      ></iframe>
    </div>
      <section className="info">
        <h2>About This Website</h2>
        <p>
          This interactive birthday website lets you celebrate anyone’s birthday online.
          You can preview a demo, then create and download a customized version for your loved ones!
        </p>
      </section>

      
      
    </div>
  );
}