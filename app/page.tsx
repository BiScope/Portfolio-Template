import Hero from "@/components/Home/Hero";
import Skills from "@/components/Home/Skills";
import Services from "@/components/Home/Services";
import Companies from "@/components/Home/Companies";
import Projects from "@/components/Home/Projects";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Services />
      <Companies />
      <Projects />
      <Testimonials />
    </div>
  );
}
