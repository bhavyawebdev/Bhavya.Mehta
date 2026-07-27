import "./App.css";
import Loader from "./components/Loader";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Grain } from "./components/Primitives";

export default function App() {
  return (
    <SmoothScroll>
      <Loader />
      <Grain />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
