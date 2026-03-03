import { useScrollReveal } from "../hooks/useScrollReveal";

const stats = [
  { value: "6+", label: "Months of Experience" },
  { value: "5+", label: "Projects Completed" },
  { value: "2+", label: "Satisfied Clients" },
  { value: "99%", label: "Code Quality" },
];

export default function About() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="about" className="relative py-10">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-[100px]" />

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
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            About Me
          </span>
          <h2 className="section-title">
            Passionate about building <br />
            <span className="gradient-text">exceptional web experiences</span>
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center gap-12 w-full max-w-[800px] mx-auto text-center">
          {/* Image / Visual */}
          <div className="relative flex justify-center w-full">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 blur-xl" />
              <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full glass-strong overflow-hidden flex items-center justify-center">
                {/* Abstract developer visual */}
                <img
                  src="/profile.jpg"
                  alt="Your Name"
                  className="w-full h-full object-cover"
                />
                {/* Shimmer effect */}
                <div
                  className="absolute inset-0 opacity-30 mix-blend-overlay"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 3s infinite linear",
                  }}
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-2 -right-6 glass px-4 py-2 rounded-xl animate-float text-sm font-medium text-[var(--color-accent-cyan)] shadow-lg shadow-cyan-500/10">
                ⚡ Fast Learner
              </div>
              <div className="absolute -bottom-2 -left-6 glass px-4 py-2 rounded-xl animate-float-delayed text-sm font-medium text-[var(--color-accent-purple)] shadow-lg shadow-purple-500/10">
                🎯 Detail Oriented
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full text-center flex flex-col items-center">
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4 text-lg md:text-xl max-w-[700px]">
              I'm a{" "}
              <strong className="text-white">Full Stack Web Developer</strong>{" "}
              with a passion for creating beautiful, performant, and
              user-centric web applications. With over 6 months of experience, I
              specialize in building end-to-end solutions from stunning
              frontends to robust backend systems.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-10 text-lg md:text-xl max-w-[700px]">
              My expertise spans across the modern web stack — from React and
              Next.js on the frontend to Node.js, Python, and databases on the
              backend. I love turning complex problems into elegant, scalable
              solutions that users enjoy.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[800px] mx-auto">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-5 text-center group hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-3xl font-bold font-[var(--font-outfit)] gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)] font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
