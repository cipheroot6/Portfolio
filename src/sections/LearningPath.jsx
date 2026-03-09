import { useScrollReveal } from "../hooks/useScrollReveal";

const educationFields = [
  {
    degree: "B-Tech in Computer Science (AIML)",
    description:
      "Graduated with Honors. Coursework included Data Structures, Algorithms, Web Development, Artificial Intelligence and Machine Learning.",
    tags: ["Computer Science", "Web Development", "AIML"],
  },
  {
    degree: "Full Stack Web Development Bootcamp",
    description:
      "Intensive 12-week program focusing on modern web technologies including React, Next.js, and databases.",
    tags: ["React", "Next.js", "ProstgreSQL"],
  },
  {
    degree: "Ultimate Backend Developer Course",
    description:
      "Focused on building production ready backend systems using Node.js, Express, MongoDB and Rate Limiting.",
    tags: ["Node.js", "Express", "MongoDB", "Networking"],
  },
];

export default function LearningPath() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="LearningPath" className="relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-blue-600/5 blur-[120px]" />

      <div
        ref={ref}
        className={`section-container reveal ${visible ? "visible" : ""}`}
      >
        <div className="text-center mb-16">
          <span className="section-label glass text-[var(--color-accent-blue)]">
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
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            Background
          </span>
          <h2 className="section-title">
            My <span className="gradient-text">Learning Path</span>
          </h2>
          <p className="section-desc mx-auto">
            My academic background and continuous learning journey.
          </p>
          <div className="h-6" />
        </div>

        <div className="max-w-[700px] w-full mx-auto flex flex-col gap-10">
          {educationFields.map((edu, i) => (
            <div
              key={i}
              className="glass rounded-xl p-8 flex flex-col items-center text-center group hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <h3 className="text-xl font-semibold font-[var(--font-outfit)] text-white mb-2">
                {edu.degree}
              </h3>
              <p className="text-md font-medium gradient-text-warm mb-4">
                {edu.institution}
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-xl mx-auto mb-6">
                {edu.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {edu.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-[10px] font-medium text-[var(--color-text-muted)] bg-white/5 rounded-md uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
