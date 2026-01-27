import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import CanvasBackground from "@/components/CanvasBackground";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <CanvasBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
