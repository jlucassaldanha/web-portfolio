import Hero from '@/components/sections/Hero/Hero';

export default function Home() {
  return (
    <div>
      <main>
        <section className='min-h-[calc(100vh-3.5rem)] flex items-center'>
          <Hero />
        </section>
      </main>
    </div>
  );
}
