import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  Footer,
  EngineeringNotes,
  Testimonials,
} from "./components";
import MagnifyLens  from "./components/MagnifyLens";
import Chatbot from "./components/Chatbot";

const lightGridStyle = {
  backgroundImage:
    "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)," +
    "linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
  backgroundSize: "64px 64px",
};

function LightDecor({ squares }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {squares.map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: s.top,
            bottom: s.bottom,
            left: s.left,
            right: s.right,
            width: s.size,
            height: s.size,
            border: "1px solid rgba(0,0,0,0.07)",
          }}
        />
      ))}
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <div
        className="bg-primary min-h-screen relative overflow-x-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      >
        {/* Global floating squares — absolute so they scroll with the page and sit behind sections */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {/* Hero zone */}
          <div style={{ position:"absolute", top:"8vh",  right:"6%",  width:128, height:128, border:"1px solid rgba(255,255,255,0.05)"  }} />
          <div style={{ position:"absolute", top:"15vh", right:"24%", width: 52, height: 52,  border:"1px solid rgba(255,255,255,0.04)"  }} />
          <div style={{ position:"absolute", top:"22vh", right:"38%", width:176, height:176, border:"1px solid rgba(255,255,255,0.03)"  }} />
          <div style={{ position:"absolute", top:"60vh", right:"8%",  width: 88, height: 88,  border:"1px solid rgba(255,255,255,0.045)" }} />
          <div style={{ position:"absolute", top:"75vh", right:"30%", width: 44, height: 44,  border:"1px solid rgba(255,255,255,0.035)" }} />
          <div style={{ position:"absolute", top:"85vh", right:"12%", width:112, height:112, border:"1px solid rgba(255,255,255,0.04)"  }} />
          {/* Works zone (~200-300 vh) */}
          <div style={{ position:"absolute", top:"228vh", left:"8%",  width: 96, height: 96,  border:"1px solid rgba(255,255,255,0.04)"  }} />
          <div style={{ position:"absolute", top:"240vh", right:"5%", width: 64, height: 64,  border:"1px solid rgba(255,255,255,0.045)" }} />
          <div style={{ position:"absolute", top:"260vh", right:"18%",width:144, height:144, border:"1px solid rgba(255,255,255,0.03)"  }} />
          <div style={{ position:"absolute", top:"285vh", left:"15%", width: 48, height: 48,  border:"1px solid rgba(255,255,255,0.035)" }} />
          {/* Tech zone (~400-500 vh) */}
          <div style={{ position:"absolute", top:"415vh", right:"10%",width:112, height:112, border:"1px solid rgba(255,255,255,0.045)" }} />
          <div style={{ position:"absolute", top:"445vh", left:"6%",  width: 80, height: 80,  border:"1px solid rgba(255,255,255,0.04)"  }} />
          <div style={{ position:"absolute", top:"468vh", right:"32%",width: 56, height: 56,  border:"1px solid rgba(255,255,255,0.035)" }} />
          {/* Testimonials zone (~600-700 vh) */}
          <div style={{ position:"absolute", top:"618vh", right:"8%", width: 96, height: 96,  border:"1px solid rgba(255,255,255,0.04)"  }} />
          <div style={{ position:"absolute", top:"648vh", left:"12%", width: 64, height: 64,  border:"1px solid rgba(255,255,255,0.03)"  }} />
          <div style={{ position:"absolute", top:"672vh", right:"22%",width:128, height:128, border:"1px solid rgba(255,255,255,0.03)"  }} />
        </div>
        <Navbar />
        <main>
          {/* Dark */}
          <Hero />

          {/* Light */}
          <div className="section-light bg-primary relative" style={lightGridStyle}>
            <LightDecor squares={[
              { top:"12%", right:"7%",  size:112 },
              { top:"28%", left:"5%",  size: 64 },
              { top:"55%", right:"22%",size: 48 },
              { top:"72%", left:"18%", size: 96 },
            ]} />
            <Experience />
          </div>

          {/* Dark */}
          <Works />

          {/* Light */}
          <div className="section-light bg-primary relative" style={lightGridStyle}>
            <LightDecor squares={[
              { top:"10%", left:"6%",  size: 80 },
              { top:"35%", right:"8%", size:128 },
              { top:"65%", right:"28%",size: 52 },
              { top:"80%", left:"14%", size: 96 },
            ]} />
            <EngineeringNotes />
          </div>

          {/* Dark */}
          <Tech />

          {/* Light */}
          <div className="section-light bg-primary relative" style={lightGridStyle}>
            <LightDecor squares={[
              { top:"8%",  right:"6%",  size: 96 },
              { top:"30%", left:"8%",   size: 60 },
              { top:"60%", right:"20%", size:144 },
              { top:"78%", left:"22%",  size: 44 },
            ]} />
            <About />
          </div>

          {/* Dark */}
          <Testimonials />

          {/* Light */}
          <div className="section-light bg-primary relative" style={lightGridStyle}>
            <LightDecor squares={[
              { top:"10%", right:"8%",  size: 80 },
              { top:"40%", left:"6%",   size:112 },
              { top:"70%", right:"25%", size: 56 },
            ]} />
            <Contact />
          </div>
        </main>
        <Footer />
        <MagnifyLens />
        <Chatbot />
      </div>
    </BrowserRouter>
  );
};

export default App;
