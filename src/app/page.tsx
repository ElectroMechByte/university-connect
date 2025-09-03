import Contact from "./components/Contact";
import Counters from "./components/Counters";
import CoursesGrid from "./components/CoursesGrid";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";
import TopUniversities from "./components/TopUniversities";
import WhyChoose from "./components/WhyChoose";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <WhyChoose />
      <Counters /> 
      <CoursesGrid />
      <TopUniversities/>
      <Testimonials />
      <Contact/>
      <Footer/>
    </main>
  );
}
