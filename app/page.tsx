import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import RebajaTuSeguro from "@/components/RebajaTuSeguro";
import BottomCTA from "@/components/BottomCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <RebajaTuSeguro />
      <BottomCTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
