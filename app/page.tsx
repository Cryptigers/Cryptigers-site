import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Gallery from "./components/Gallery";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <Gallery />
      <Connect />
      <Footer />
    </main>
  );
}