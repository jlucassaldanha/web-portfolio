import Link from 'next/link';
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} João Lucas. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-6">
          <Link 
            href="https://github.com/jlucassaldanha" 
            target="_blank" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </Link>
          
          <Link 
            href="https://linkedin.com/in/seu-linkedin" 
            target="_blank" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </Link>

          <Link 
            href="https://wa.me/5553981021846" 
            target='_blank'
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label='WhatsApp'
          >
            <FaWhatsapp className="w-5 h-5" />
          </Link>

          <Link 
            href="mailto:seu-email@exemplo.com" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="E-mail"
          >
            <SiGmail className="w-5 h-5" />
          </Link>
        </div>
        
      </div>
    </footer>
  );
}