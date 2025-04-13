import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleNavClick = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-[#0f172a]/90 backdrop-blur-md shadow-md py-4 text-white"
        : "bg-transparent py-6 text-foreground"
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <span className="text-2xl font-bold gradient-text cursor-pointer" onClick={() => handleNavClick("#home")}>
          Portfolio
        </span>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className={`py-2 text-left ${scrolled ? 'text-white' : 'text-foreground/80'} hover:text-primary`}
            >
              {link.name}
            </button>
          ))}
          <Button onClick={toggleTheme} variant="ghost" size="icon">
            {theme === "light" ? (
              <Moon size={20} className={scrolled ? "text-white" : ""} />
            ) : (
              <Sun size={20} className={scrolled ? "text-white" : ""} />
            )}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <Button onClick={toggleTheme} variant="ghost" size="icon"
            className="mr-2"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </Button>
          <button
            className={`text-foreground/80 hover:text-primary ${scrolled ? "text-white" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md w-full">
          <nav className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-foreground/80 hover:text-primary text-left py-2"
              >
                {link.name}
              </button>
            ))}
            <Button className="mt-4" onClick={() => handleNavClick("#contact")}>
              Hire Me
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
