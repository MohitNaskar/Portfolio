import { SectionWrapper } from "../hoc";
import { techCategories } from "../constants";
import ScrollIndicator from "./ScrollIndicator";

const Tech = () => {
  return (
    <div>
      <div className="mb-12">
        <p className="font-mono text-muted text-[0.6875rem] tracking-[0.2em] uppercase mb-3">
          Technical
        </p>
        <h2 className="text-text-primary font-bold text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] leading-tight tracking-tight">
          Stack
        </h2>
      </div>

      <div className="border-t border-border">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((cat, index) => (
            <div
              key={cat.label}
              className="border-b border-border sm:border-r last:border-r-0 p-6 sm:p-8 lg:odd:border-r lg:even:border-r lg:[&:nth-child(3n)]:border-r-0"
            >
              <p className="font-mono text-muted text-[0.6875rem] tracking-[0.15em] uppercase mb-5">
                {cat.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-secondary text-[0.75rem] tracking-wide border border-border px-2.5 py-1 hover:border-accent hover:text-text-primary transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollIndicator href="#about" />
    </div>
  );
};

export default SectionWrapper(Tech, "stack");
