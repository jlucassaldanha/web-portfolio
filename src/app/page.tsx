import About from '@/components/sections/About/About';
import Hero from '@/components/sections/Hero/Hero';

export default function Home() {
  return (
    <div>
      <main>
        <section className='min-h-screen flex items-center'>
          <Hero />
        </section>

        <section className='min-h-screen flex items-center'>
          <About />
        </section>
      </main>
    </div>
  );
}
