import ProjectCard from '@/components/myComponents/ProjectCard';
import projectCover from "../../../../public/project_cover.jpg"
import { TypographyH1, TypographyH4 } from '@/components/ui/typography';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { cn } from 'cn';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export interface ProjectType {
  title: string
  description: string
  repoUrl: string
  deployUrl?: string
  img?: string | StaticImport
}

interface ProjectsProps {
  projects: ProjectType[]
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div className='max-w-7xl mx-auto px-3 py-16 md:py-32 flex flex-col gap-10'>
      <div className='max-w-500'>
        <TypographyH1>
          Projetos
        </TypographyH1>
      </div>
      <div className='flex flex-col items-center gap-12 md:gap-8'>
        {projects.length > 0 ? (
          projects.map((project, i) => (
            <ProjectCard 
              key={i}
              title={project.title}
              description={project.description}
              repoUrl={project.repoUrl}
              deployUrl={project.deployUrl}
              img={project.img || projectCover}
            />
          ))
        ) : (
          <TypographyH4>Nenhum projeto publicado</TypographyH4>
        )}
      </div>

      <div className='flex justify-center'>
        <Link className={cn(buttonVariants({ variant: "default" }))} href='https://github.com/jlucassaldanha' target="_blank">
          Descobrir mais projetos
        </Link>
      </div>
    </div>
  )
}