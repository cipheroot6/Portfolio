import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Learning Path", href: "#LearningPath" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-[1000] transition-all duration-500 w-[96%] max-w-[1000px] rounded-2xl ${
        scrolled
          ? "glass py-3 shadow-xl shadow-purple-500/10"
          : "py-4 glass border-white/5"
      }`}
    >
      <div className="px-5 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1 flex justify-start">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="relative font-[var(--font-outfit)] text-xl font-bold tracking-tight"
            data-hover
          >
            <span className="gradient-text">&lt;</span>
            <span className="text-white">CIPHEROOT</span>
            <span className="gradient-text">/&gt;</span>
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-none items-center justify-center gap-2 lg:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              data-hover
              className={`relative px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeSection === link.href.replace("#", "")
                  ? "text-white bg-white/5"
                  : "text-[var(--color-text-secondary)] hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
              {activeSection === link.href.replace("#", "") && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-gradient-to-r from-[var(--color-accent-purple)] to-[var(--color-accent-cyan)] rounded-full" />
              )}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex-1 flex justify-end">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            data-hover
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-[var(--color-accent-purple)] to-[var(--color-accent-blue)] text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5"
          >
            Let's Talk
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          data-hover
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 mt-2 rounded-2xl glass-strong border transition-all duration-500 overflow-hidden ${
          mobileOpen ? "max-h-[400px] opacity-100 border-white/[0.08]" : "max-h-0 opacity-0 border-transparent"
        }`}
        style={{ backgroundColor: 'rgba(10, 10, 26, 0.85)' }}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                activeSection === link.href.replace("#", "")
                  ? "text-white bg-white/5"
                  : "text-[var(--color-text-secondary)] hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
