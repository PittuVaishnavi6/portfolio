import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Publications from "./components/Publications";
import Contact from "./components/Contact"; // ✅ ADD THIS

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Publications />
      <Certificates />
      <Contact />
    </>
  );
}