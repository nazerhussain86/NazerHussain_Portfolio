import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Download, Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useState } from "react";


const Hero = () => {
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
    link.href = "NazerHussainAbdulraheem_June2025.pdf";
    link.download = "NazerHussainAR.pdf";
    link.target = "_blank"; // Optional: open in new tab
    link.rel = "noopener noreferrer"; // Security
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
              <Download size={18} /> My CV
            </Button>
            {/* <Button
              size="lg"
              className="shine-effect hover:bg-primary/80 transition-colors pulse-button btn-shine rounded-full"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Let's Talk
            </Button> */}

          </div>

          {/* Social links */}
          <div className="mt-8 flex items-center gap-4">
            <p className="text-sm text-foreground/60">Find me on:</p>
            <div className="flex gap-3">
              <a
                href="https://github.com/nazerhussain86"
                target="_blank"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/nazerhussain"
                target="_blank"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:nazerhussain1999@gmail.com"
                target="_blank"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
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
          <span className={`mb-2 ${scrolled ? 'hidden' : ''}`}>Scroll Down</span>
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
