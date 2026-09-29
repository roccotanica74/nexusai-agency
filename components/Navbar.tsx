"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { label: "Servizi", href: "#servizi" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Chi Siamo", href: "#chi-siamo" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Sparkles className="h-6 w-6 text-electric-blue group-hover:rotate-12 transition-transform" />
            <span className="text-xl font-bold tracking-tight">
              Nexus
              <span className="bg-gradient-to-r from-electric-blue to-neon-violet bg-clip-text text-transparent">
                AI
              </span>{" "}
              Agency
            </span>
          </a>

          {/* Link Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-electric-blue to-neon-violet group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Desktop */}
          <a
            href="#contatti"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric-blue to-neon-violet px-5 py-2.5 text-sm font-semibold text-black glow-hover"
          >
            Prenota una Call
          </a>

          {/* Hamburger Mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contatti"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center rounded-full bg-gradient-to-r from-electric-blue to-neon-violet px-5 py-3 text-sm font-semibold text-black mt-4"
              >
                Prenota una Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
