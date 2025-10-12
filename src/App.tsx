import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Visit from "./pages/Visit.tsx";
import Countdown from "./pages/Countdown";
import Gift from "./pages/Gift.tsx";
import Cake from "./pages/Cake";
import Wishes from "./pages/Wishes";
import Download from "./pages/Download.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="/visit/countdown" element={<Countdown />} />
        <Route path="/visit/gift" element={<Gift />} />
        <Route path="/visit/cake" element={<Cake />} />
        <Route path="/visit/wishes" element={<Wishes />} />
        <Route path="/download" element={<Download />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;