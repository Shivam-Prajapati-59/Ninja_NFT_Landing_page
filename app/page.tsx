import About from "@/sections/About";
import Economy from "@/sections/Economy";
import Feature from "@/sections/Feature";
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
    </>
  );
}
