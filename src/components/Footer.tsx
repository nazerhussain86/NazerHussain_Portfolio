
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const previousYear = new Date().getFullYear() - 1;
  const nextYear = new Date().getFullYear() + 1;

  return (
    <footer className="bg-secondary/50 py-10 border-t border-primary/10">

      <div className="border-t border-primary/10 mt-8 pt-8 flex flex-col justify-center items-center text-sm text-foreground/60 text-center">
        <p className="text-slate-500">
          &copy; {currentYear}-{nextYear} Nazer Hussain. Built with passion. Made with love, deployed with precision. All rights reserved.
        </p>

      </div>

    </footer>

  );
};

export default Footer;
