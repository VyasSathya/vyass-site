import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Connect from '@/components/Connect';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto">
        <Hero />
        <Projects />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
