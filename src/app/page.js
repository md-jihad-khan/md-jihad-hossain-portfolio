import AboutMe from "@/components/AboutMe";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Main() {
  return (
    <main>
      <div className=" h-10 absolute  top-0 z-50 w-full">
        <Navbar></Navbar>
      </div>
      <Home />
      <Skills />
      <Projects />
      <AboutMe />
      <ContactUs />
      <Footer />
    </main>
  );
}
