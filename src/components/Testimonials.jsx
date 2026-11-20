import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";
import ScrollIndicator from "./ScrollIndicator";

const TestimonialCard = ({ testimonial }) => (
  <article className="border-t border-border pt-10 pb-10 flex flex-col gap-6">
    {/* Opening quote */}
    <span className="font-mono text-accent text-[2.5rem] leading-none select-none">"</span>

    {/* Quote body */}
    <p className="text-secondary text-[0.9375rem] leading-relaxed flex-1">
      {testimonial.testimonial}
    </p>

    {/* Attribution */}
    <div className="flex items-center gap-4 pt-4 border-t border-border">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-10 h-10 rounded-full object-cover opacity-90 flex-shrink-0"
      />
      <div>
        <p className="text-text-primary font-semibold text-[0.9375rem]">
          {testimonial.name}
        </p>
        <p className="font-mono text-muted text-[0.6875rem] tracking-wide mt-0.5">
          {testimonial.designation} · {testimonial.company}
        </p>
      </div>
      {testimonial.testimonial_link && (
        <a
          href={testimonial.testimonial_link}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto font-mono text-muted text-[0.6875rem] tracking-wide hover:text-accent transition-colors"
        >
          LinkedIn ↗
        </a>
      )}
    </div>
  </article>
);

const Testimonials = () => (
  <div>
    <div className="mb-12">
      <p className="font-mono text-muted text-[0.6875rem] tracking-[0.2em] uppercase mb-3">
        Recommendations
      </p>
      <h2 className="text-text-primary font-bold text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] leading-tight tracking-tight">
        What people say
      </h2>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10">
      {testimonials.map((t, i) => (
        <TestimonialCard key={i} testimonial={t} />
      ))}
    </div>

    <div className="border-t border-border mt-0" />
    <ScrollIndicator href="#contact" />
  </div>
);

export default SectionWrapper(Testimonials, "testimonials");
