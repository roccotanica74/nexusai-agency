import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-white">
      <Navbar />
      <Hero />
      <Services />
      <Methodology />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
