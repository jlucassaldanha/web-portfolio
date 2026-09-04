import Contact from '@/components/sections/Contact/Contact';

export default function Home() {
  return (
    <div>
      <main>
        <section className='min-h-[calc(100vh-3.5rem)] flex items-center'>
          <Contact />
        </section>
      </main>
    </div>
  );
}
