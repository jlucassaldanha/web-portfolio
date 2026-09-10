import About from '@/components/sections/About/About';
import Hero from '@/components/sections/Hero/Hero';

export default function Home() {
  return (
    <div>
      <main>
        <section id="hero" className='min-h-[calc(100vh-3.5rem)] flex items-center'>
          <Hero />
        </section>
        <section id="about" className='min-h-[calc(100vh-3.5rem)] flex items-center'>
          <About />
        </section>
      </main>
    </div>
  );
}
