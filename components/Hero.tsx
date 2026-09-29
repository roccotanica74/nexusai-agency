"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Mesh Gradient + Tech Grid */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 tech-grid opacity-40" />

      {/* Orbi decorativi */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-violet/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-8"
        >
          <span className="h-2 w-2 rounded-full bg-electric-blue animate-pulse" />
          <span className="text-sm text-gray-300">Agenzia Digital & AI</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6"
        >
          Il{" "}
          <span className="bg-gradient-to-r from-electric-blue to-neon-violet bg-clip-text text-transparent">
            futuro
          </span>{" "}
          del tuo business
          <br />
          inizia oggi con Sardegna Turistica.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Uniamo Marketing strategico, Sviluppo Web su misura e Intelligenza
          Artificiale per far esplodere la tua crescita.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#servizi"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric-blue to-neon-violet px-8 py-4 text-base font-semibold text-black glow-hover"
          >
            Scopri i Servizi
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#casi-studio"
            className="group inline-flex items-center gap-2 rounded-full glass px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
          >
            <Play className="h-5 w-5 text-electric-blue" />
            Guarda i Casi Studio
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "150+", label: "Progetti Completati" },
            { value: "98%", label: "Clienti Soddisfatti" },
            { value: "3x", label: "ROI Medio" },
            { value: "24/7", label: "Supporto AI" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-electric-blue to-neon-violet bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
