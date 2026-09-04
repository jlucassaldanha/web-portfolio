import Image from 'next/image';
import profilePic from "../../../public/profile.jpg"
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { TypographyH4 } from '../ui/typography';
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

export default function ProjectCard() {
  return (
    <div>
      <div className="relative mx-auto md:min-w-100 md:max-w-250 md:flex border-b py-1">
        <Link href="" target='_blank' className='md:w-1/3'>
          <Image
            src={profilePic}
            alt="Event cover"
            className="relative z-20 aspect-video object-cover rounded-md "
          />
        </Link>
        
        <div className='px-5 md:w-2/3'>
          <Link href="" target='_blank'>
            <div className='flex justify-end px-5 pt-5 md:pt-2 w-full'>
              <Badge variant="secondary" >Deployed</Badge>
            </div>

            <TypographyH4 className='pb-5'>Teste</TypographyH4>
            
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ad quis minima voluptatibus, repellendus nulla dolores.
            </div>
          </Link>

          <div className='flex justify-end p-5'>
            <Button>
              Repositório <FaGithub />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}