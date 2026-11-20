import { SectionWrapper } from "../hoc";
import ScrollIndicator from "./ScrollIndicator";

const About = () => {
  return (
    <div>
      <div className="mb-12">
        <p className="font-mono text-muted text-[0.6875rem] tracking-[0.2em] uppercase mb-3">
          About
        </p>
        <h2 className="text-text-primary font-bold text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] leading-tight tracking-tight">
          Mohit Naskar
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 border-t border-border pt-10">
        {/* Main bio */}
        <div className="space-y-5">
          <p className="text-secondary text-[0.9375rem] leading-relaxed">
            I'm an AI/ML engineer based in Bengaluru, India, currently working at SAP Labs India.
            My work sits at the intersection of machine learning, language models, and production
            engineering — building systems that are reliable, interpretable, and genuinely useful.
          </p>
          <p className="text-secondary text-[0.9375rem] leading-relaxed">
            I've worked on NLP-driven topic modelling, agentic AI workflows using tools like
            MCP, retrieval-augmented generation, and traditional ML pipelines for classification
            and recommendation. I try to understand problems deeply before reaching for solutions.
          </p>
          <p className="text-secondary text-[0.9375rem] leading-relaxed">
            Outside engineering, you'll find me on the football pitch — preferably in a Barcelona
            kit — or planning the next trip somewhere new.
          </p>
        </div>

        {/* Meta details */}
        <div className="space-y-6">
          <div>
            <p className="font-mono text-muted text-[0.6875rem] tracking-[0.15em] uppercase mb-3">
              Currently
            </p>
            <p className="text-text-primary text-[0.9375rem]">AI/ML Developer Associate</p>
            <p className="text-secondary text-[0.875rem]">SAP Labs India, Bengaluru</p>
          </div>

          <div>
            <p className="font-mono text-muted text-[0.6875rem] tracking-[0.15em] uppercase mb-3">
              Focus areas
            </p>
            <ul className="space-y-1.5">
              {[
                "Machine Learning & Deep Learning",
                "LLM Engineering & RAG",
                "Agentic AI Systems",
                "NLP & Text Processing",
              ].map((area) => (
                <li key={area} className="flex gap-3 text-secondary text-[0.875rem]">
                  <span className="font-mono text-border mt-1 text-[0.5rem]">◆</span>
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-muted text-[0.6875rem] tracking-[0.15em] uppercase mb-3">
              Interests
            </p>
            <p className="text-secondary text-[0.875rem] leading-relaxed">
              Football · Travel · Building things that work
            </p>
          </div>
        </div>
      </div>
      <ScrollIndicator href="#testimonials" />
    </div>
  );
};

export default SectionWrapper(About, "about");
