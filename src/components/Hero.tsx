import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const programmingLanguages = [
  { name: "C#", color: "bg-gradient-to-r from-purple-500 to-blue-600" },
  { name: "MVC", color: "bg-gradient-to-r from-blue-500 to-cyan-400" },
  { name: "Python", color: "bg-gradient-to-r from-blue-600 to-green-500" },
  { name: "React", color: "bg-gradient-to-r from-cyan-400 to-blue-500" },
  { name: "JavaScript", color: "bg-gradient-to-r from-yellow-400 to-amber-500" },
  { name: "TypeScript", color: "bg-gradient-to-r from-blue-400 to-indigo-500" },
  { name: "Node.js", color: "bg-gradient-to-r from-green-500 to-emerald-600" },
  { name: "HTML", color: "bg-gradient-to-r from-orange-500 to-red-500" },
  { name: "CSS", color: "bg-gradient-to-r from-blue-400 to-indigo-400" },
  { name: "SQL", color: "bg-gradient-to-r from-sky-500 to-blue-600" },
];

const Hero = () => {
  const floatingElementsRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/1fD2TSomg9RsSiZC_qAtx7TE506sVeoSv/view?usp=drive_link";
    link.download = "NazerHussainResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  // Handle smooth scrolling to the 'about' section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-2/2">
          <p className={`mb-2 ${scrolled ? "text-white" : "text-primary"}`}>
            Hello, I'm
          </p>
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative `}
          >
            Nazer Hussain A
          </h1>
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl mb-6 `}
          >
            Full Stack Developer &{" "}
            <span className="gradient-text">Problem Solver</span>
          </h2>
          <p
            className={`text-lg mb-6 max-w-xl `}
          >
            Software developer dedicated to crafting innovative, user-centric digital experiences. I build scalable, efficient, and intuitive solutions, continuously exploring new technologies to deliver impactful results.<br />
            Results-driven software developer crafting high-quality, user-centric digital experiences. I deliver scalable, efficient, and intuitive solutions.<br />
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 text-center">
            <Button
              size="lg"
              className="shine-effect hover:bg-primary/80 transition-colors btn-shine rounded-full"
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              onClick={handleDownloadCV}
              className="shine-effect hover:bg-primary/80 transition-colors btn-shine rounded-full"
            >
              <Download size={18} /> Download CV
            </Button>
            <Button
              size="lg"
              className="shine-effect hover:bg-primary/80 transition-colors pulse-button btn-shine rounded-full"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Hire Me
            </Button>

          </div>

          {/* Social links */}
          <div className="mt-8 flex items-center gap-4">
            <p className="text-sm text-foreground/60">Find me on:</p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 md:justify-end hidden md:block">
          <img
            src="intro1.png"
            // Example adjustments:
            style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
            alt="Portfolio Cartoon"
            className="max-w-md rounded-lg shadow-md mx-auto md:mx-0"
          />
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <a
          onClick={scrollToAbout}
          className={`flex flex-col items-center transition-colors ${scrolled
            ? "text-white/60 hover:text-primary"
            : "text-foreground/50 hover:text-primary"
            }`}
        >
          <span className={`mb-2${scrolled ? 'hidden' : ''}`}>Scroll Down</span>
          <div
            className={`p-2 rounded-full border border-foreground/20 hover:border-primary/50 transition-colors ${scrolled ? 'hidden' : ''}`}
          >
            <ArrowDown className="animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
