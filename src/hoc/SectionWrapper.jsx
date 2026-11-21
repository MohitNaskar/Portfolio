const SECTION_LABELS = {
  experience: "Professional Experience",
  work: "Selected Projects",
  notes: "Engineering Notes",
  stack: "Technical Stack",
  about: "About Mohit Naskar",
  testimonials: "Testimonials",
  contact: "Contact",
};

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <section
        className="max-w-7xl mx-auto relative z-0 px-6 sm:px-10 lg:px-16 py-16 sm:py-20"
        aria-label={SECTION_LABELS[idName] || idName}
      >
        {idName && (
          <span className="hash-span" id={idName}>
            &nbsp;
          </span>
        )}
        <Component />
      </section>
    );
  };

export default SectionWrapper;
