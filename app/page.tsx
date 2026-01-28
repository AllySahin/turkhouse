import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import WhyUs from '@/components/WhyUs';
import Process from '@/components/Process';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <WhyUs />
      <Gallery />
      <Process />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}
