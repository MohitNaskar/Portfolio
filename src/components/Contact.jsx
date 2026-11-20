import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../hoc";

const contactLinks = [
  {
    label: "Email",
    value: "mohitnaskar02@gmail.com",
    href: "mailto:mohitnaskar02@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mohit-naskar",
    href: "https://www.linkedin.com/in/mohit-naskar-a595201a6/",
  },
  {
    label: "GitHub",
    value: "github.com/MohitNaskar",
    href: "https://github.com/MohitNaskar",
  },
  {
    label: "Resume",
    value: "View PDF ↗",
    href: "https://drive.google.com/file/d/1mW6hDFfBNT2w-UBxnvdv9bN3mDIqS26E/view?usp=sharing",
  },
];

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!sent) return;
    const timer = setTimeout(() => setSent(false), 30_000);
    return () => clearTimeout(timer);
  }, [sent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      e.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Mohit",
          from_email: form.email,
          to_email: "mohitnaskar02@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert("Something went wrong. Please try reaching out directly via email.");
      });
  };

  return (
    <div>
      <div className="mb-12">
        <p className="font-mono text-muted text-[0.6875rem] tracking-[0.2em] uppercase mb-3">
          Get in touch
        </p>
        <h2 className="text-text-primary font-bold text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] leading-tight tracking-tight">
          Let's talk about engineering.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 border-t border-border pt-10">
        {/* Contact links */}
        <div>
          <p className="text-secondary text-[0.9375rem] leading-relaxed mb-8">
            Open to interesting engineering problems, collaborations, or conversations
            about machine learning and AI systems.
          </p>
          <div className="space-y-4">
            {contactLinks.map((item) => (
              <div key={item.label} className="flex gap-6 items-baseline">
                <span className="font-mono text-muted text-[0.6875rem] tracking-[0.1em] uppercase w-16 flex-shrink-0">
                  {item.label}
                </span>
                <a
                  href={item.href}
                  target={item.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="text-secondary text-[0.875rem] hover:text-accent transition-colors"
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Contact form */}
        <div>
          {sent ? (
            <div className="border border-border p-6">
              <p className="font-mono text-accent text-[0.75rem] tracking-wide mb-2">Message sent</p>
              <p className="text-secondary text-[0.875rem]">
                Thanks for reaching out. I'll get back to you as soon as I can.
              </p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-muted text-[0.6875rem] tracking-[0.1em] uppercase mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`w-full bg-surface border text-text-primary text-[0.875rem] px-4 py-3 placeholder:text-muted focus:outline-none transition-colors ${errors.name ? "border-red-500" : "border-border focus:border-accent"}`}
                />
                {errors.name && <p className="font-mono text-[0.625rem] text-red-500 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-muted text-[0.6875rem] tracking-[0.1em] uppercase mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`w-full bg-surface border text-text-primary text-[0.875rem] px-4 py-3 placeholder:text-muted focus:outline-none transition-colors ${errors.email ? "border-red-500" : "border-border focus:border-accent"}`}
                />
                {errors.email && <p className="font-mono text-[0.625rem] text-red-500 mt-1">{errors.email}</p>}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-muted text-[0.6875rem] tracking-[0.1em] uppercase mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  className={`w-full bg-surface border text-text-primary text-[0.875rem] px-4 py-3 placeholder:text-muted focus:outline-none transition-colors resize-none ${errors.message ? "border-red-500" : "border-border focus:border-accent"}`}
                />
                {errors.message && <p className="font-mono text-[0.625rem] text-red-500 mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="font-mono text-[0.75rem] tracking-widest uppercase border border-border text-secondary px-6 py-3 hover:border-accent hover:text-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
