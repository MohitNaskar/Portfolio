import { SectionWrapper } from "../hoc";
import { experiences } from "../constants";
import ScrollIndicator from "./ScrollIndicator";

const ExperienceEntry = ({ experience, index }) => {
  const num = String(index + 1).padStart(2, "0");

  return (
    <article className="border-t border-border pt-10 pb-10 sm:pb-14">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-14">
        {/* Left: company + meta */}
        <div className="lg:w-[280px] flex-shrink-0">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-muted text-[0.6875rem] tracking-widest">{num}</span>
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-6 h-6 object-contain rounded-sm opacity-80"
            />
          </div>
          <p className="text-text-primary font-semibold text-[1rem] mb-1">
            {experience.company_name}
          </p>
          <p className="font-mono text-muted text-[0.75rem] tracking-wide mb-1">
            {experience.date}
          </p>
          {experience.location && (
            <p className="font-mono text-muted text-[0.6875rem] tracking-wide">
              {experience.location}
            </p>
          )}
        </div>

        {/* Right: role + details */}
        <div className="flex-1">
          <h3 className="text-text-primary font-bold text-[1.25rem] sm:text-[1.5rem] leading-tight tracking-tight mb-3">
            {experience.title}
          </h3>
          <p className="text-secondary text-[0.9375rem] leading-relaxed mb-6">
            {experience.description}
          </p>
          <ul className="space-y-3">
            {experience.points.map((point, i) => (
              <li key={i} className="flex gap-3 text-secondary text-[0.875rem] leading-relaxed">
                <span className="font-mono text-border mt-1.5 text-[0.5rem]">◆</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

const Experience = () => {
  return (
    <div>
      <div className="mb-12">
        <p className="font-mono text-muted text-[0.6875rem] tracking-[0.2em] uppercase mb-3">
          Professional
        </p>
        <h2 className="text-text-primary font-bold text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] leading-tight tracking-tight">
          Experience
        </h2>
      </div>

      <div>
        {experiences.map((exp, index) => (
          <ExperienceEntry key={index} experience={exp} index={index} />
        ))}
      </div>
      <ScrollIndicator href="#work" />
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
