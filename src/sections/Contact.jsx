import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const contactInfo = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: "Email",
    value: "cipheroot@proton.me",
    href: "mailto:cipheroot@proton.me",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Location",
    value: "Available Worldwide",
    href: null,
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Availability",
    value: "Open to opportunities",
    href: null,
  },
];

export default function Contact() {
  const [ref, visible] = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    window.location.href = `mailto:cipheroot@proton.me?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative">
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-[120px]" />

      <div
        ref={ref}
        className={`section-container reveal ${visible ? "visible" : ""}`}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label glass text-[var(--color-accent-purple)]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m22 2-7 20-4-9-9-4z" />
              <path d="M22 2 11 13" />
            </svg>
            Contact
          </span>
          <h2 className="section-title">
            Let's work <span className="gradient-text">together</span>
          </h2>
          <p className="section-desc mx-auto">
            Have a project in mind? Let's talk about how I can help bring your
            ideas to life.
          </p>
        </div>

        <div className="max-w-[800px] w-full mx-auto flex flex-col items-center">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full glass-strong rounded-2xl p-8 mb-10"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-2 font-medium"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-base placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-purple)] focus:ring-1 focus:ring-[var(--color-accent-purple)]/50 transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-2 font-medium"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-base placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-purple)] focus:ring-1 focus:ring-[var(--color-accent-purple)]/50 transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-base placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-purple)] focus:ring-1 focus:ring-[var(--color-accent-purple)]/50 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                data-hover
                className="w-full btn-primary justify-center py-4 text-base mt-2"
              >
                <span>Send Message</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="relative z-10"
                >
                  <path d="m22 2-7 20-4-9-9-4z" />
                  <path d="M22 2 11 13" />
                </svg>
              </button>
            </div>
          </form>

          {/* Quick Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {contactInfo.map((info) =>
              info.href ? (
                <a
                  key={info.label}
                  href={info.href}
                  className="glass rounded-xl px-5 py-3 flex items-center gap-3 group hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-[var(--color-accent-cyan)]">
                    {info.icon}
                  </div>
                  <span className="text-sm text-white font-medium group-hover:text-[var(--color-accent-cyan)] transition-colors">
                    {info.value}
                  </span>
                </a>
              ) : (
                <div
                  key={info.label}
                  className="glass rounded-xl px-5 py-3 flex items-center gap-3"
                >
                  <div className="text-[var(--color-accent-purple)]">
                    {info.icon}
                  </div>
                  <span className="text-sm text-white font-medium">
                    {info.value}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
