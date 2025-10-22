import HeroBanner from "../components/HeroBanner";
import Programs from "../components/Programs";
import AdmissionsCTA from "../components/AdmissionsCTA";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Programs />
      <AdmissionsCTA />
      <Contact />
    </main>
  );
}
