import About from '@/components/sections/About/About';

export default function Home() {
  return (
    <div>
      <main>
        <section className='min-h-[calc(100vh-3.5rem)] flex items-center'>
          <About />
        </section>
      </main>
    </div>
  );
}
