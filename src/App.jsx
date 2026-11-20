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

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-primary min-h-screen">
        <Navbar />
        <main>
          {/* Dark */}
          <Hero />

          {/* Light */}
          <div className="section-light bg-primary">
            <Experience />
          </div>

          {/* Dark */}
          <Works />

          {/* Light */}
          <div className="section-light bg-primary">
            <EngineeringNotes />
          </div>

          {/* Dark */}
          <Tech />

          {/* Light */}
          <div className="section-light bg-primary">
            <About />
          </div>

          {/* Dark */}
          <Testimonials />

          {/* Light */}
          <div className="section-light bg-primary">
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
