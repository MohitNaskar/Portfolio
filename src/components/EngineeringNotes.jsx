import { SectionWrapper } from "../hoc";
import { engineeringNotes } from "../constants";
import ScrollIndicator from "./ScrollIndicator";

const NoteEntry = ({ note, index }) => {
  const num = String(index + 1).padStart(2, "0");

  return (
    <article className="border-t border-border py-8 group">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-start">
        {/* Left: index + date + category */}
        <div className="sm:w-[220px] flex-shrink-0 flex sm:flex-col gap-4 sm:gap-2">
          <span className="font-mono text-muted text-[0.6875rem] tracking-widest">{num}</span>
          <div className="flex flex-col gap-1">
            <span className="font-mono text-muted text-[0.6875rem] tracking-wide">
              {note.date}
            </span>
            <span className="font-mono text-accent text-[0.6875rem] tracking-[0.1em] uppercase">
              {note.category}
            </span>
          </div>
        </div>

        {/* Right: title + description + link */}
        <div className="flex-1">
          <h3 className="text-text-primary font-semibold text-[1.0625rem] sm:text-[1.1875rem] leading-snug mb-2 group-hover:text-accent transition-colors">
            {note.title}
          </h3>
          <p className="text-secondary text-[0.875rem] leading-relaxed mb-4">
            {note.description}
          </p>
          {note.link ? (
            <a
              href={note.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-secondary text-[0.75rem] tracking-wide hover:text-accent transition-colors"
            >
              GitHub ↗
            </a>
          ) : (
            <span className="font-mono text-muted text-[0.6875rem] tracking-wide">
              — In progress
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

const EngineeringNotes = () => {
  return (
    <div>
      <div className="mb-12">
        <p className="font-mono text-muted text-[0.6875rem] tracking-[0.2em] uppercase mb-3">
          Technical Journal
        </p>
        <h2 className="text-text-primary font-bold text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] leading-tight tracking-tight">
          Engineering Notes
        </h2>
        <p className="text-secondary text-[0.9375rem] leading-relaxed mt-4 max-w-xl">
          Experiments, implementations, and lessons from working with machine
          learning, LLMs, and AI systems.
        </p>
      </div>

      <div className="relative">
        {/* Scrollable list — shows ~3 entries, scroll for the rest */}
        <div
          className="max-h-[560px] overflow-y-auto pr-1"
          style={{ scrollbarWidth: "thin", scrollbarColor: "var(--color-border) transparent" }}
        >
          {engineeringNotes.map((note, index) => (
            <NoteEntry key={index} note={note} index={index} />
          ))}
          <div className="border-t border-border" />
        </div>

        {/* Fade hint at the bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{ background: "linear-gradient(to top, var(--color-bg), transparent)" }}
        />
      </div>

      <p className="font-mono text-muted text-[0.6875rem] tracking-wide mt-3">
        scroll to see all {engineeringNotes.length} notes ↑↓
      </p>

      <ScrollIndicator href="#stack" />
    </div>
  );
};

export default SectionWrapper(EngineeringNotes, "notes");
