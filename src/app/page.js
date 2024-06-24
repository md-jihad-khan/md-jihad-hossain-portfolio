import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Main() {
  return (
    <main>
      <Home />
      <Skills />
      <Projects />
      <AboutMe />
      <Footer />
    </main>
  );
}
