import About from "@/sections/About";
import CtaSection from "@/sections/CtaSection";
import Economy from "@/sections/Economy";
import FaqseSection from "@/sections/FaqSection";
import Feature from "@/sections/Feature";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import StepsSection from "@/sections/StepsSection";
import TeamSection from "@/sections/TeamSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Feature />
      <Economy />
      <StepsSection />
      <TeamSection />
      <FaqseSection />
      <CtaSection />
      <Footer />
    </>
  );
}
