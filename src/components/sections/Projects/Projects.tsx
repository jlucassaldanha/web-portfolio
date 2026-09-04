import ProjectCard from '@/components/myComponents/ProjectCard';
import { TypographyH1 } from '@/components/ui/typography';

export default function Projects() {
  return (
    <div className='max-w-7xl mx-auto px-3 py-16 md:py-32 flex flex-col gap-10'>
      <div className='max-w-500'>
        <TypographyH1>
          Projetos
        </TypographyH1>
      </div>
      <div className='flex flex-col md:flex-row items-center gap-12 md:gap-8'>
        <ProjectCard />
      </div>
    </div>
  )
}