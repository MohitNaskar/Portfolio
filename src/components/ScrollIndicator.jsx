const ScrollIndicator = ({ href }) => (
  <div className="mt-14 hidden sm:block">
    <a
      href={href}
      className="font-mono text-muted text-[0.6875rem] tracking-[0.15em] uppercase hover:text-secondary transition-colors flex items-center gap-3"
    >
      <span className="w-8 h-px bg-border inline-block" />
      Scroll
    </a>
  </div>
);

export default ScrollIndicator;
