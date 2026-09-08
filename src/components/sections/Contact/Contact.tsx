import Link from 'next/link';
import { TypographyH1 } from '@/components/ui/typography';
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div className='max-w-7xl mx-auto px-3 py-16 md:py-32 flex flex-col gap-10'>
      <div className='max-w-500'>
        <TypographyH1>
          Contato
        </TypographyH1>
      </div>
      <div className='flex flex-col md:flex-row items-center gap-12 md:gap-8'>
        <div className='flex items-center justify-center gap-10'>
          <Link 
            href='https://www.linkedin.com/in/joao-lucas-saldanha/' 
            target='_blank'
            aria-label='LinkedIn'
          >
            <FaLinkedin size={50}/>
          </Link>

          <Link 
            href="https://github.com/jlucassaldanha" 
            target='_blank'
            aria-label='GitHub'
          >
            <FaGithub size={50}/>
          </Link>

          <Link 
            href="https://wa.me/5553981021846" 
            target='_blank'
            aria-label='WhatsApp'
          >
            <FaWhatsapp size={50}/>
          </Link>

          <Link 
            href="mailto:j.lucassaldanha@gmail.com" 
            target='_blank'
            aria-label='E-mail'
          >
            <SiGmail size={50}/>
          </Link>
        </div>
      </div>
    </div>
  )
}