import { Sparkles, Linkedin, Twitter, Instagram, Mail, Phone } from "lucide-react";

const quickLinks = [
  { label: "Servizi", href: "#servizi" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Chi Siamo", href: "#chi-siamo" },
  { label: "Contatti", href: "#contatti" },
  { label: "Privacy Policy", href: "#" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "X (Twitter)" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Colonna 1: Logo e Descrizione */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-electric-blue" />
              <span className="text-xl font-bold tracking-tight">
                Nexus
                <span className="bg-gradient-to-r from-electric-blue to-neon-violet bg-clip-text text-transparent">
                  AI
                </span>{" "}
                Agency
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Uniamo Marketing strategico, Sviluppo Web su misura e
              Intelligenza Artificiale per far esplodere la tua crescita.
            </p>
          </div>

          {/* Colonna 2: Link Rapidi */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">
              Link Rapidi
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonna 3: Contatti e Social */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">
              Contatti
            </h4>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:info@nexusai.agency"
                className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-electric-blue" />
                info@nexusai.agency
              </a>
              <a
                href="tel:+390212345678"
                className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-electric-blue" />
                +39 02 1234 5678
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-electric-blue hover:border-electric-blue/30 transition-all"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} NexusAI Agency. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
