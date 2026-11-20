const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center" aria-label="Introduction">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full pt-24 pb-20 sm:pt-32 sm:pb-28">
        {/* Monospace label */}
        <p className="font-mono text-muted text-[0.6875rem] tracking-[0.2em] uppercase mb-6">
          AI/ML Engineer — Bengaluru, India
        </p>

        {/* Main heading */}
        <h1 className="font-bold text-text-primary leading-[1.05] tracking-tight mb-6 text-[2.5rem] sm:text-[3.75rem] lg:text-[5rem] xl:text-[6rem] max-w-5xl">
          I build and experiment
          <br />
          with intelligent systems.
        </h1>

        {/* Sub description */}
        <p className="text-secondary text-[1rem] sm:text-[1.125rem] leading-relaxed font-light max-w-2xl mb-4">
          Working across machine learning, LLM applications, retrieval systems
          and AI engineering.
        </p>

        {/* Meta line */}
        <p className="font-mono text-muted text-[0.75rem] tracking-wide mb-10">
          Currently at{" "}
          <span className="text-accent">SAP Labs India</span>
        </p>

        {/* CTA Links */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="#work"
            className="inline-flex items-center gap-2 text-text-primary text-[0.875rem] font-medium border border-border px-5 py-2.5 hover:border-accent hover:text-accent transition-colors"
          >
            View Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1mW6hDFfBNT2w-UBxnvdv9bN3mDIqS26E/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-secondary text-[0.875rem] font-mono hover:text-text-primary transition-colors"
          >
            Resume ↗
          </a>
          <a
            href="https://github.com/MohitNaskar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-secondary text-[0.875rem] font-mono hover:text-text-primary transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/mohit-naskar-a595201a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-secondary text-[0.875rem] font-mono hover:text-text-primary transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-6 sm:left-10 lg:left-16 hidden sm:block">
          <a href="#experience" className="font-mono text-muted text-[0.6875rem] tracking-[0.15em] uppercase hover:text-secondary transition-colors flex items-center gap-3">
            <span className="w-8 h-px bg-border inline-block" />
            Scroll
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
