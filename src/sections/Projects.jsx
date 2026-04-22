import { useState, useEffect, useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

function useInFocalZone() {
  const ref = useRef(null);
  const [inZone, setInZone] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInZone(entry.isIntersecting),
      {
        rootMargin: "-40% 0px -40% 0px", // triggers only in middle 20% of screen
        threshold: 0,
      },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, inZone];
}

const filters = ["All", "Full Stack", "Backend"];

const projects = [
  {
    title: "AI Mentor",
    desc: "A AI Mentor app that helps you learn any thing you wish as per your pace.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
    category: "Full Stack",
    gradient: "from-purple-500/20 to-pink-500/20",
    icon: "🎓",
    github: "https://github.com/cipheroot6/ai-mentor",
    live: "https://ai-mentor-application.vercel.app",
  },
  {
    title: "DevPulse",
    desc: "A developer productivity tracker that logs coding sessions, visualizes activity trends, tracks languages, and generates weekly reports to help you code smarter.",
    tags: ["Next.js", "TypeScript", "Tailwind", "MongoDB"],
    category: "Full Stack",
    gradient: "from-blue-500/20 to-indigo-500/20",
    icon: "📈",
    github: "https://github.com/cipheroot6/DevPulse",
    live: "https://dev-pulse-application.vercel.app",
  },
  {
    title: "AI Interview App",
    desc: "An AI-powered job interview platform powered by Vapi AI voice agents, with real-time feedback and detailed performance analysis to help you ace your next interview.",
    tags: ["Next.js", "VAPI", "Tailwind", "Firebase"],
    category: "Full Stack",
    gradient: "from-emerald-500/20 to-cyan-500/20",
    icon: "💼",
    github: "https://github.com/cipheroot6/ai-interview",
    live: "https://ai-voice-interview-web-application.vercel.app",
  },
  {
    title: "Session Management App",
    desc: "A security-focused session management platform with device fingerprinting, multi-device session tracking, suspicious login detection, password reset and an admin control panel.",
    tags: ["React", "Stripe", "Express", "MongoDB"],
    category: "Backend",
    gradient: "from-cyan-500/20 to-blue-500/20",
    icon: "🔐",
    github: "https://github.com/cipheroot6/SessionManager",
    live: "https://session-manager-app.vercel.app",
  },
  {
    title: "Chatting App",
    desc: "A fully-featured real-time chat platform with typing indicators, read receipts, online presence, custom keyboard sounds, and Socket.io — built without any third-party chat SDKs.",
    tags: ["React", "MongoDB", "Socket.io", "Express"],
    category: "Full Stack",
    gradient: "from-pink-500/20 to-purple-500/20",
    icon: "💬",
    github: "https://github.com/cipheroot6/Chatify",
    live: "https://chatify-a-real-time-chatting-web-app.vercel.app",
  },
  {
    title: "Subscription Tracker",
    desc: "A subscription management platform with an admin panel, automated renewal alerts via email 3 days before billing, spending analytics, and full CRUD management.",
    tags: ["Node.js", "Express", "React", "MongoDB"],
    category: "Backend",
    gradient: "from-orange-500/20 to-red-500/20",
    icon: "⚡",
    github: "https://github.com/cipheroot6/subscriptionTracker",
    live: "https://subscription-tracker-with-admin-panel.vercel.app",
  },
];

function ProjectCard({ project, index }) {
  const [cardRef, inZone] = useInFocalZone();

  return (
    <div
      ref={cardRef}
      className="group/card glass rounded-2xl overflow-hidden hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/5 select-none"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Project Thumbnail */}
      <div
        className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
      >
        <span className="text-5xl group-hover/card:scale-110 transition-transform duration-500">
          {project.icon}
        </span>

        {/* 
          Desktop: show on hover via group-hover
          Mobile: show when card is in focal zone (middle 50% of screen) 
        */}
        <div
          className={`absolute inset-0 bg-black/70 transition-opacity duration-300 flex items-center justify-center gap-4
            md:opacity-0 md:group-hover/card:opacity-100
            ${inZone ? "opacity-100" : "opacity-0"}
          `}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-white text-sm font-medium hover:bg-white/20 transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-white text-sm font-medium hover:bg-white/20 transition-colors duration-200"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Live
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col items-center text-center">
        <h3 className="text-xl font-semibold font-[var(--font-outfit)] text-white mb-3">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6 max-w-sm">
          {project.desc}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-[10px] font-medium text-[var(--color-text-muted)] bg-white/5 rounded-md uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");
  const [ref, visible] = useScrollReveal();

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-purple-600/5 blur-[120px]" />

      <div
        ref={ref}
        className={`section-container reveal ${visible ? "visible" : ""}`}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label glass text-[var(--color-accent-pink)]">
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
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            Portfolio
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-desc mx-auto">
            A selection of projects that showcase my skills across the full
            stack.
          </p>
          <div className="h-6" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 w-full mx-auto">
          {filters.map((f) => (
            <button
              key={f}
              data-hover
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-xl text-lg font-medium transition-all duration-300 ${
                active === f
                  ? "glass-strong text-white"
                  : "text-[var(--color-text-muted)] hover:text-white hover:bg-white/5"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="h-6" />

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
