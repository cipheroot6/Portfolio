import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const categories = [
  {
    name: "Frontend",
    icon: "🎨",
    color: "from-purple-500 to-pink-500",
    borderColor: "border-purple-500/20",
    skills: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 60 },
      { name: "TypeScript", level: 45 },
      { name: "Tailwind CSS", level: 80 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "Socket.io", level: 70 },
    ],
  },
  {
    name: "Backend",
    icon: "⚙️",
    color: "from-cyan-500 to-blue-500",
    borderColor: "border-cyan-500/20",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Python", level: 25 },
      { name: "Express.js", level: 92 },
      { name: "Django", level: 0 },
      { name: "REST APIs", level: 91 },
      { name: "GraphQL", level: 37 },
      { name: "PostgreSQL", level: 0 },
      { name: "MongoDB", level: 88 },
    ],
  },
  {
    name: "DevOps & Tools",
    icon: "🚀",
    color: "from-emerald-500 to-cyan-500",
    borderColor: "border-emerald-500/20",
    skills: [
      { name: "Git", level: 0 },
      { name: "Docker", level: 0 },
      { name: "AWS", level: 0 },
      { name: "CI/CD", level: 0 },
      { name: "Linux", level: 96 },
      { name: "Nginx", level: 0 },
      { name: "Arcjet", level: 72 },
      { name: "Kubernetes", level: 0 },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [ref, visible] = useScrollReveal();

  return (
    <section id="skills" className="relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-cyan-600/5 blur-[120px]" />

      <div
        ref={ref}
        className={`section-container reveal ${visible ? "visible" : ""}`}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label glass text-[var(--color-accent-cyan)]">
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
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            Tech Stack
          </span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-desc mx-auto">
            A curated set of technologies I use to build modern, scalable web
            applications.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12 w-full mx-auto">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              data-hover
              onClick={() => setActiveCategory(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === i
                  ? "glass-strong text-white shadow-lg shadow-purple-500/10"
                  : "text-[var(--color-text-muted)] hover:text-white hover:bg-white/5"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-4 max-w-[800px] w-full mx-auto">
          {categories[activeCategory].skills.map((skill, i) => (
            <div
              key={skill.name}
              className="glass rounded-xl p-6 flex flex-col items-center justify-center text-center group hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-0.5"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="flex flex-col items-center justify-center w-full mb-4">
                <span className="text-lg font-semibold text-white mb-2">
                  {skill.name}
                </span>
                <span className="text-sm text-[var(--color-text-muted)] font-mono">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${categories[activeCategory].color} transition-all duration-1000 ease-out`}
                  style={{
                    width: visible ? `${skill.level}%` : "0%",
                    transitionDelay: `${i * 0.1 + 0.3}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional tools row */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--color-text-muted)] mb-4">
            Also experienced with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Resend",
              "Vite",
              "DaisyUI",
              "Opencode",
              "Ollama",
              "Prisma",
              "Mongoose",
              "Zod",
              "Figma",
              "VSCode",
              "Postman",
            ].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 text-xs font-medium text-[var(--color-text-secondary)] glass rounded-lg hover:text-white transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
