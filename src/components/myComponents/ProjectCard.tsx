import Image from 'next/image';
import { Badge } from '../ui/badge';
import { TypographyH4 } from '../ui/typography';
import { FaGithub } from "react-icons/fa";
import DeactivatableLink from './DeactivatableLink';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { cn } from 'cn';
import { buttonVariants } from '../ui/button';
import Link from 'next/link';

interface ProjectCardProps {
  title: string
  description: string
  repoUrl: string
  deployUrl?: string
  img: string | StaticImport
}

export default function ProjectCard({ title, description, repoUrl, deployUrl, img }: ProjectCardProps) {
  const deployed = deployUrl ? true : false

  return (
    <div className="relative mx-auto md:min-w-100 md:max-w-250 md:flex border-b pb-3">
      <div className='md:w-1/3'>
        <DeactivatableLink href={deployUrl} target='_blank' disabled={!deployed}>
          <Image
            src={img}
            alt="Project cover"
            className="relative z-20 aspect-video object-cover rounded-md"
            priority
          />
        </DeactivatableLink>
      </div>
      
      <div className='px-5 md:w-2/3'>
        <DeactivatableLink href={deployUrl} target='_blank' disabled={!deployed}>
          {deployed && (
            <div className='flex justify-end px-5 pt-5 md:pt-2 w-full'>
              <Badge variant="secondary" >Deployed</Badge>
            </div>
          )}

          <TypographyH4 className='py-5'>{title}</TypographyH4>
          
          <div>{description}</div>
        </DeactivatableLink>

        <div className='flex justify-end p-5'>
          <Link className={cn(buttonVariants({ variant: "default" }))} href={repoUrl} target="_blank">
            Repositório <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  )
}