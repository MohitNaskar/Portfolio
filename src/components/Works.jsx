import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import ScrollIndicator from "./ScrollIndicator";

const ProjectCard = ({ index, project }) => {
  const isEven = index % 2 === 0;
  const num = String(index + 1).padStart(2, "0");

  return (
    <article className="border-t border-border pt-10 pb-10 sm:pb-16">
      <div
        className={`flex flex-col ${
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        } gap-8 lg:gap-14 items-start`}
      >
        {/* Project image */}
        <div className="w-full lg:w-[52%] flex-shrink-0">
          <a
            href={project.source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group overflow-hidden bg-surface"
          >
            <img
              src={project.image}
              alt={project.name}
              loading="lazy"
              className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </a>
        </div>

        {/* Project details */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Index + category */}
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-muted text-[0.6875rem] tracking-widest">
              {num}
            </span>
            <span className="font-mono text-muted text-[0.6875rem] tracking-[0.15em] uppercase">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-text-primary font-bold text-[1.375rem] sm:text-[1.625rem] leading-tight tracking-tight mb-4">
            {project.name}
          </h3>

          {/* Description */}
          <p className="text-secondary text-[0.9375rem] leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                className="font-mono text-secondary text-[0.6875rem] border border-border px-2.5 py-1 tracking-wide"
              >
                {tag.name}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href={project.source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-secondary text-[0.75rem] tracking-wide hover:text-accent transition-colors"
            >
              GitHub ↗
            </a>
            {project.live_demo_link && project.live_demo_link !== project.source_code_link && (
              <a
                href={project.live_demo_link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-secondary text-[0.75rem] tracking-wide hover:text-accent transition-colors"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

const Works = () => {
  return (
    <div>
      {/* Section header */}
      <div className="mb-12">
        <p className="font-mono text-muted text-[0.6875rem] tracking-[0.2em] uppercase mb-3">
          Selected Work
        </p>
        <h2 className="text-text-primary font-bold text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] leading-tight tracking-tight">
          Projects
        </h2>
      </div>

      {/* Projects */}
      <div>
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} project={project} />
        ))}
      </div>
      <ScrollIndicator href="#notes" />
    </div>
  );
};

export default SectionWrapper(Works, "work");
