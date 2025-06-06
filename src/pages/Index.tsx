import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import SkillsAndCertifications from "@/components/SkillsAndCertifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const Index = () => {
  return (
    // Wrapping the entire app inside HashRouter
    <>
      <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
        <div className="bg-background text-foreground min-h-screen">
          {/* Enhanced background elements */}
          <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-blue-400/10 to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/4"></div>
            <div className="absolute top-1/4 right-0 w-1/4 h-1/4 bg-gradient-to-b from-purple-400/5 to-transparent rounded-full blur-3xl"></div>
          </div>

          {/* All your components inside the main layout */}
          <Header />
          <main className="relative z-10">
            <Hero />
            <About />
            <SkillsAndCertifications />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

export default Index;
