"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "NexusAI ha trasformato completamente la nostra presenza online. Il traffico organico è cresciuto del 300% in 6 mesi.",
    name: "Marco Rossi",
    role: "CEO, TechVenture S.r.l.",
    logo: "TV",
  },
  {
    quote:
      "L'assistente AI che hanno sviluppato per noi ha ridotto i tempi di risposta del 85%. Un investimento che ripaga da solo.",
    name: "Laura Bianchi",
    role: "COO, RetailPro Group",
    logo: "RP",
  },
  {
    quote:
      "La loro strategia di performance ads ha moltiplicato il nostro ROI pubblicitario. Professionalità e risultati concreti.",
    name: "Alessandro Verdi",
    role: "Founder, StartupFlow",
    logo: "SF",
  },
];

export default function Testimonials() {
  return (
    <section id="chi-siamo" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-electric-blue uppercase tracking-wider">
            Testimonianze
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Aziende che stanno già{" "}
            <span className="bg-gradient-to-r from-electric-blue to-neon-violet bg-clip-text text-transparent">
              scalando con noi
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass gradient-border rounded-2xl p-8 flex flex-col"
            >
              {/* Icona quote */}
              <Quote className="h-8 w-8 text-electric-blue/40 mb-4" />

              {/* Citazione */}
              <p className="text-gray-300 text-sm leading-relaxed flex-grow mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Autore */}
              <div className="flex items-center gap-4">
                {/* Logo placeholder - Sostituire con immagine reale del logo aziendale (es. url da /public/logos/nome-azienda.png) */}
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-400 flex-shrink-0">
                  {testimonial.logo}
                </div>
                <div>
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-gray-500 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
