import { BrowserRouter } from "react-router-dom";
import {
  CustomCursor,
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary snap-y snap-mandatory h-screen overflow-scroll">
        <div className="relative z-0">
          <CustomCursor />
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
        
      </div>
    </BrowserRouter>
  );
};

export default App;
