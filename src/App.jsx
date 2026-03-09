import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import LearningPath from "./sections/LearningPath";

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="w-full text-center">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <LearningPath />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
