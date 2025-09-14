import Hero from "../components/Hero";
import Programs from "../components/Programs";
import AdmissionsCTA from "../components/AdmissionsCTA";
import Partners from "../components/Partners";
import News from "../components/News";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Programs />
      <AdmissionsCTA />
      <Partners />
      <News />
      <Contact />
    </main>
  );
}

