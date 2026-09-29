"use client";

import { motion } from "framer-motion";
import { Target, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    icon: Target,
    number: "01",
    title: "Analisi & Strategia",
    description:
      "Studiamo il tuo mercato, i competitor e i tuoi obiettivi per definire una strategia su misura.",
  },
  {
    icon: Cpu,
    number: "02",
    title: "Sviluppo & Integrazione",
    description:
      "Costuiamo soluzioni tecnologiche avanzate, integrando ogni strumento in un ecosistema coerente.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Ottimizzazione & Scaling",
    description:
      "Monitoriamo, testiamo e ottimizziamo continuamente per scalare i risultati nel tempo.",
  },
];

export default function Methodology() {
  return (
    <section id="metodologia" className="relative py-24 md:py-32">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-electric-blue uppercase tracking-wider">
            Come Lavoriamo
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            La nostra{" "}
            <span className="bg-gradient-to-r from-electric-blue to-neon-violet bg-clip-text text-transparent">
              Metodologia
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            Un processo collaudato in 3 step per garantire risultati concreti e misurabili.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative text-center group"
            >
              {/* Linea di connessione (solo desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-electric-blue/30 to-transparent" />
              )}

              {/* Numero di step */}
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl glass mb-6 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="h-9 w-9 text-electric-blue" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-r from-electric-blue to-neon-violet flex items-center justify-center text-xs font-bold text-black">
                  {step.number}
                </span>
              </div>

              {/* Contenuto */}
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
