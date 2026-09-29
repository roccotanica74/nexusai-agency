"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contatti" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background con gradiente e pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-transparent to-neon-violet/10" />
      <div className="absolute inset-0 tech-grid opacity-20" />

      {/* Orbi decorativi */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Icona */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass mb-8">
            <Calendar className="h-8 w-8 text-electric-blue" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Pronto a{" "}
            <span className="bg-gradient-to-r from-electric-blue to-neon-violet bg-clip-text text-transparent">
              dominare il tuo mercato?
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Prenota una consulenza gratuita di 30 minuti. Analizzeremo il tuo
            business e ti mostreremo come l'AI e il marketing possono
            moltiplicare i tuoi risultati.
          </p>

          {/* CTA Button */}
          <a
            href="mailto:info@nexusai.agency"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-electric-blue to-neon-violet px-10 py-5 text-lg font-semibold text-black glow-hover"
          >
            Prenota la tua Call Strategica
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Note */}
          <p className="mt-6 text-sm text-gray-500">
            Nessun impegno. Solo una conversazione costruttiva.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
