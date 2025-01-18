import Hero from "@/components/ui/hero";
import Services from "@/components/ui/services";
import About from "@/components/ui/about";
import Stats from "@/components/ui/stats";
import Contact from "@/components/ui/contact";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}