import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <div className="relative">
          <Header />
        </div>
        <Nav />
        <div className="relative">
          <About />
          <Experience />
        </div>
        <div className="relative">
          <Portfolio />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}
