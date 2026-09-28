import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import RebajaTuSeguro from "@/components/RebajaTuSeguro";
import BottomCTA from "@/components/BottomCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WaveDivider from "@/components/WaveDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <WaveDivider fill="#1B2A4E" />
      <About />
      <WaveDivider fill="#ffffff" className="-mt-px" />
      <WhyUs />
      <RebajaTuSeguro />
      <BottomCTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
