import Projects from '@/components/sections/Projects/Projects';

export default function Home() {
  return (
    <div>
      <main>
        <section className='min-h-[calc(100vh-3.5rem)] flex items-center'>
          <Projects />
        </section>
      </main>
    </div>
  );
}
