import { useEffect, useState, useRef } from "react";

const roles = [
  "Full Stack Developer",
  "Backend Engineer",
  "Frontend Architect",
  "UI/UX Enthusiast",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.slice(0, text.length + 1));
        if (text.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setText(currentRole.slice(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  // Parallax mouse effect
  useEffect(() => {
    const handleMouse = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left - rect.width / 2) / rect.width,
        y: (e.clientY - rect.top - rect.height / 2) / rect.height,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 -left-32 w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-purple-600/20 animate-pulse-glow"
          style={{
            transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full bg-cyan-500/15 animate-pulse-glow"
          style={{
            animationDelay: "1.5s",
            transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`,
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-pink-500/10 animate-pulse-glow"
          style={{
            animationDelay: "3s",
            transform: `translate(calc(-50% + ${mousePos.x * 10}px), calc(-50% + ${mousePos.y * 10}px))`,
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-3 h-3 rounded-full bg-purple-400/40 animate-float" />
        <div className="absolute top-[25%] right-[15%] w-2 h-2 rounded-full bg-cyan-400/50 animate-float-delayed" />
        <div
          className="absolute bottom-[30%] left-[20%] w-4 h-4 rounded-sm bg-pink-400/30 animate-float rotate-45"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-[60%] right-[10%] w-2.5 h-2.5 rounded-full bg-blue-400/40 animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div className="absolute top-[80%] left-[40%] w-2 h-2 rounded-full bg-purple-300/30 animate-float-delayed" />

        {/* Orbiting ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-white/[0.03] animate-spin-slow" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[350px] md:h-[350px] rounded-full border border-white/[0.04] animate-spin-slow"
          style={{ animationDirection: "reverse", animationDuration: "15s" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6 w-full max-w-[850px] mx-auto animate-fade-in">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-slide-down">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          <span className="text-sm text-[var(--color-text-secondary)] font-medium">
            Available for opportunities
          </span>
        </div>

        {/* Heading */}
        <div className="min-h-[120px] sm:min-h-[160px] md:min-h-[220px] flex flex-col items-center justify-center mb-6 w-full">
          <h1 className="font-[var(--font-outfit)] text-[clamp(2rem,6vw,5rem)] font-extrabold leading-[1.1] tracking-tight w-full flex flex-col items-center justify-center">
            <span className="block text-white mb-2">Hi, I'm a</span>
            <span className="inline-flex items-center justify-center flex-wrap text-center">
              <span className="gradient-text glow-text">{text}</span>
              <span className="inline-block w-[3px] h-[1em] ml-1 bg-[var(--color-accent-cyan)] animate-pulse" />
            </span>
          </h1>
        </div>

        <br />

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl text-[var(--color-text-secondary)] w-full max-w-[600px] mx-auto text-center mb-10 leading-relaxed animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          I craft high-performance web applications with clean code, stunning
          interfaces, and seamless user experiences.
        </p>

        <br />
        <br />
        <br />
        <br />

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 animate-slide-up mx-auto w-full"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#projects"
            data-hover
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>View My Work</span>
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
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#contact"
            data-hover
            className="btn-outline"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get In Touch
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
              <path d="m22 2-7 20-4-9-9-4z" />
              <path d="M22 2 11 13" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
