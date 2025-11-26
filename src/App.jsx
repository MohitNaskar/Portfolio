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
      <div className="relative z-0 bg-primary h-screen overflow-y-scroll overflow-x-hidden smooth-scroll">
        <div className="relative z-0">
          <CustomCursor />
          <div className="fixed inset-0 -z-10">
            <StarsCanvas />
          </div>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
