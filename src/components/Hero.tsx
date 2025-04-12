
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useRef } from "react";

// Define our programming languages data
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



  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a');

    // Set the link's href to the path of the resume file
    // Note: You would need to add your actual resume PDF to the public folder
    link.href = '/nazer-hussain-resume.pdf';

    // Set the download attribute to suggest a filename
    link.download = 'Nazer-Hussain-Resume.pdf';

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger the click event on the link
    link.click();

    // Clean up - remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >


      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-2/2">


          <p className="text-primary mb-2">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative">
            Nazer Hussain A

          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-foreground/80 mb-6">
            Full Stack Developer &{" "}
            <span className="gradient-text">Problem Solver</span>
          </h2>
          <p className="text-lg text-foreground/70 mb-6 max-w-xl">
            From concept to creation - crafting exceptional software experiences 🎯 | Developer | Innovator
          </p>

          {/* BUTTONS stay below this left side */}
          <div className="flex flex-wrap gap-4 text-center">
            <a href="#projects" className="inline-block">
              <Button size="lg" className="shine-effect hover:bg-primary/80 transition-colors">
                View My Work
              </Button>
            </a>
            <Button
              size="lg"
              //variant="outline"
              onClick={handleDownloadCV}
              className="shine-effect hover:bg-primary/80 transition-colors"
            >
              <Download size={18} /> Download CV
            </Button>
            <a href="#contact" className="inline-block">
              <Button
                size="lg"
                //variant="secondary"
                className="shine-effect hover:bg-primary/80 transition-colors pulse-button"

              >
                Hire Me
              </Button>
            </a>
          </div>
        </div>

        {/* Right Section (Floating Tags Only) */}
        <div className="w-full md:w-1/2 md:justify-end hidden md:block">
          <img
            src="intro1.png" // Replace with the actual path to your image
            alt="Portfolio Cartoon"
            className="max-w-md rounded-lg shadow-md mx-auto md:mx-0" // Adjusted margins for centering/alignment
          />
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <a
          href="#about"
          className="flex flex-col items-center text-foreground/50 hover:text-primary transition-colors"
        >
          <span className="mb-2">Scroll Down</span>
          <div className="p-2 rounded-full border border-foreground/20 hover:border-primary/50 transition-colors">
            <ArrowDown className="animate-bounce" />
          </div>
        </a>
      </div>
    </section>

  );
}

export default Hero;
