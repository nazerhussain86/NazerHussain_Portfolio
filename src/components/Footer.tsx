
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const previousYear = new Date().getFullYear() - 1;
  const nextYear = new Date().getFullYear() + 1;

  return (
    <footer className="bg-secondary/50 py-10 border-t border-primary/10">
      <div className="container mx-auto px-6">
        <div className="border-t border-primary/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
          <p>&copy; {currentYear}-{nextYear} Nazer Hussain All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
