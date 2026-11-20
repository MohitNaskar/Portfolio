const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="font-mono text-muted text-[0.85rem] tracking-widest">
            MN
          </span>
          <span className="text-muted text-[0.85rem]">
            © {year} Mohit Naskar
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/MohitNaskar"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-muted text-[0.85rem] tracking-wide hover:text-secondary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mohit-naskar-a595201a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-muted text-[0.85rem] tracking-wide hover:text-secondary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/1mW6hDFfBNT2w-UBxnvdv9bN3mDIqS26E/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-muted text-[0.85rem] tracking-wide hover:text-secondary transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
