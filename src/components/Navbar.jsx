import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { id: "experience", title: "Experience" },
  { id: "work", title: "Work" },
  { id: "notes", title: "Notes" },
  { id: "stack", title: "Stack" },
  { id: "about", title: "About" },
  { id: "testimonials", title: "Testimonials" },
  { id: "contact", title: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const NAV_H = 64;

    const checkSection = () => {
      const lightSections = document.querySelectorAll(".section-light");
      const overLight = [...lightSections].some((el) => {
        const rect = el.getBoundingClientRect();
        return rect.top <= NAV_H && rect.bottom > NAV_H;
      });
      setIsLight(overLight);
    };

    window.addEventListener("scroll", checkSection, { passive: true });
    checkSection();
    return () => window.removeEventListener("scroll", checkSection);
  }, []);

  useEffect(() => {
    const handleScroll = () => setMenuOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActive(id);
    setMenuOpen(false);
  };

  const navBg = isLight
    ? "bg-white/95 backdrop-blur-sm border-b border-[#E0E0E0]"
    : "bg-[#111111]/95 backdrop-blur-sm border-b border-[#2A2A2A]";

  const brandCls = isLight
    ? "font-mono text-[0.75rem] tracking-widest uppercase transition-colors text-[#444444] hover:text-[#111111]"
    : "font-mono text-[0.75rem] tracking-widest uppercase transition-colors text-[#ebe9e9] hover:text-white";

  const linkCls = (id) => {
    if (active === id) return "font-mono text-[0.75rem] tracking-wide transition-colors text-[#5A8A6A]";
    return isLight
      ? "font-mono text-[0.75rem] tracking-wide transition-colors text-[#444444] hover:text-[#111111]"
      : "font-mono text-[0.75rem] tracking-wide transition-colors text-[#ebe9e9] hover:text-white";
  };

  const mobileBtnCls = isLight
    ? "sm:hidden transition-colors p-1 text-[#444444] hover:text-[#111111]"
    : "sm:hidden transition-colors p-1 text-[#ebe9e9] hover:text-white";

  const mobileMenuBg = isLight
    ? "sm:hidden bg-white border-b border-[#E0E0E0]"
    : "sm:hidden bg-[#111111] border-b border-[#2A2A2A]";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between h-14 sm:h-16">
        {/* Brand */}
        <Link
          to="/"
          className={brandCls}
          onClick={() => { setActive(""); window.scrollTo(0, 0); }}
          aria-label="Mohit Naskar — home"
        >
          MN
        </Link>

        {/* Desktop nav */}
        <ul className="hidden sm:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={linkCls(link.id)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className={mobileBtnCls}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="font-mono text-[0.75rem] tracking-widest uppercase">
            {menuOpen ? "Close" : "Menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={mobileMenuBg}>
          <ul className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4" role="list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`block py-1 ${linkCls(link.id)}`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
