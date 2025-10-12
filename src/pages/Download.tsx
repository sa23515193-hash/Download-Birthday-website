import { useState } from "react";
import { saveAs } from "file-saver";
import "../App.css";

export default function Download() {
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [age, setAge] = useState("");
  const [platform, setPlatform] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = () => {
    if (!name || !relation || !age || !platform) {
      alert("Please fill all the fields before downloading.");
      return;
    }

    setIsGenerating(true);

    const htmlContent = `
    <html>
    <head>
      <title>Happy Birthday ${name}!</title>
      <style>
        body { margin:0; padding:0; font-family: Poppins, sans-serif; text-align:center; }
        section { display:none; height:100vh; width:100vw; justify-content:center; align-items:center; flex-direction:column; display:flex; color: gold; }
        #page1 { background: radial-gradient(circle at center, #1b0034, #370046, #000); font-size:2rem; }
        #page1 h1 { font-size:3rem; animation:glow 2s infinite; margin-bottom:20px; }
        @keyframes glow {0%{text-shadow:0 0 10px gold;}50%{text-shadow:0 0 30px #ffb6c1;}100%{text-shadow:0 0 10px gold;}}
        #page2 { background: radial-gradient(circle at center, #000, #330033, #000); font-size:6rem; }
        #page3 { background: linear-gradient(135deg, #000, #400040, #000); color:white; font-size:2rem; }
        #page3 .gift { font-size:6rem; animation:bounce 1s infinite; }
        @keyframes bounce {0%,100%{transform:translateY(0);}50%{transform:translateY(-20px);}}
        #page4 { background: radial-gradient(circle at center, #000, #330033, #000); color:pink; font-size:2rem; }
        #page4 .cake { font-size:6rem; margin:20px; }
        #page5 { background:black; color:white; font-size:2rem; }
        #page5 .candles { font-size:6rem; animation:flicker 1s infinite alternate; }
        @keyframes flicker {from{opacity:1;}to{opacity:0.4;}}
        #page6 { background: radial-gradient(circle at center, #1b0034, #370046, #000); font-size:2rem; }
        #page6 h1 { font-size:3rem; margin-bottom:10px; }
        #page6 p { font-size:1.5rem; max-width:700px; margin:5px auto; }
      </style>
    </head>
    <body>
      <section id="page1">
        <h1>🎉 Congratulations ${relation} ${name}! 🎉</h1>
        <p>Get ready for your birthday surprise 💫</p>
      </section>

      <section id="page2">
        <div id="count">5</div>
      </section>

      <section id="page3">
        <h1>Your Surprise Gift Awaits 🎁</h1>
        <div class="gift">🎁</div>
      </section>

      <section id="page4">
        <h1>Here’s Your Birthday Cake ${name} 🎂</h1>
        <div class="cake">🎂</div>
      </section>

      <section id="page5">
        <h1>Blow the Candles 🕯</h1>
        <div class="candles">🕯🕯🕯</div>
      </section>

      <section id="page6">
        <h1>🎉 Happy Birthday ${name}! 🎉</h1>
        <p>To my wonderful ${relation}, turning ${age} years old! 💖</p>
        <p>May your day be filled with endless laughter, success, and joy 🎈</p>
      </section>

      <script>
        const pages = ["page1","page2","page3","page4","page5","page6"];
        let current = 0;
        const showPage = (id) => { pages.forEach(p=>document.getElementById(p).style.display="none"); document.getElementById(id).style.display="flex"; }

        showPage(pages[current]);

        // Page sequence
        setTimeout(()=>{
          current++;
          showPage(pages[current]);

          // Countdown on page2
          let count = 5;
          const interval = setInterval(()=>{
            document.getElementById("count").innerText = count;
            count--;
            if(count < 0){
              clearInterval(interval);
              current++;
              showPage(pages[current]);
              nextPages();
            }
          },1000);
        },2000);

        function nextPages(){
          // page3 → page4 → page5 → page6 automatically
          setTimeout(()=>{ current++; showPage(pages[current]); },2000); // gift → cake
          setTimeout(()=>{ current++; showPage(pages[current]); },4000); // cake → candles
          setTimeout(()=>{ current++; showPage(pages[current]); },7000); // candles → wishes
        }
      </script>
    </body>
    </html>
    `;

    const blob = new Blob([htmlContent], { type: "text/html" });
    saveAs(blob, `Birthday_${name}.html`);

    setIsGenerating(false);
  };

  return (
    <div className="download-page">
      <h1>🎀 Download Custom Birthday Website</h1>
      <form>
        <label>Name 🎂</label>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />

        <label>Relation 💕</label>
        <input value={relation} onChange={(e) => setRelation(e.target.value)} placeholder="e.g. Brother, Sister" />

        <label>Age 🎈</label>
        <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter age" />

        <label>Platform 💻📱</label>
        <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
          <option value="">Select</option>
          <option>Windows</option>
          <option>Mac</option>
          <option>Android</option>
          <option>iPhone</option>
        </select>

        <button type="button" onClick={handleDownload} disabled={isGenerating}>
          {isGenerating ? "Generating..." : "Generate & Download"}
        </button>
      </form>
      <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "20px" }}>
  <iframe
    src="https://otieu.com/4/10030286"
    style={{ width: "300px", height: "400px", border: "none", overflow: "hidden" }}
    scrolling="no"
    title="Birthday Ad"
  ></iframe>
</div>

    </div>
  );
}
