"use client";

import { motion } from "framer-motion";
import { TrendingUp, Code2, Bot, Check } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Marketing Digitale",
    description:
      "Strategie data-driven per massimizzare il ROI e conquistare il tuo pubblico ideale.",
    features: [
      "SEO & Content Strategy",
      "Performance Ads (Meta/Google)",
      "Funnel di conversione",
    ],
  },
  {
    icon: Code2,
    title: "Sviluppo Web",
    description:
      "Siti e web app su misura, performanti e scalabili per ogni esigenza business.",
    features: [
      "Siti Web e Web App su misura",
      "E-commerce ad alte prestazioni",
      "UX/UI Design centrato sull'utente",
    ],
  },
  {
    icon: Bot,
    title: "Soluzioni AI",
    description:
      "Intelligenza artificiale applicata per automatizzare e ottimizzare i processi aziendali.",
    features: [
      "Automazione processi interni",
      "Chatbot e Assistenti Virtuali",
      "Analisi predittiva dei dati",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section id="servizi" className="relative py-24 md:py-32">
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
            I Nostri Servizi
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Soluzioni a 360° per{" "}
            <span className="bg-gradient-to-r from-electric-blue to-neon-violet bg-clip-text text-transparent">
              l'era digitale
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            Tre competenze chiave, un unico obiettivo: la crescita del tuo business.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group glass gradient-border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icona */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-electric-blue/20 to-neon-violet/20 mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="h-7 w-7 text-electric-blue" />
              </div>

              {/* Titolo */}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>

              {/* Descrizione */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-electric-blue flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
