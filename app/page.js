import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      
      <div className="flex flex-col gap-8 md:gap-10 pb-10">
        <Hero />
        <SelectedWork />
        <AboutMe />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
