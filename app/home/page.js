import Navbar from './components/shared/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Process from './components/Process'
import Trust from './components/Trust'
import Footer from './components/shared/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Features id="features" />
        <Process id="process" />
        <Trust id="testimonials" />
      </main>
      <Footer />
    </>
  );
} 