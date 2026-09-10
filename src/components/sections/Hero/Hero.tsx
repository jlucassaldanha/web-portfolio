import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { buttonVariants } from '@/components/ui/button';
import { TypographyH1 } from '@/components/ui/typography';
import { cn } from 'cn';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className='max-w-7xl mx-auto px-6 py-16 md:py-32'>
      <div className='flex flex-col-reverse md:flex-row items-center gap-12 md:gap-8'>
        <div className='w-full md:w-2/3 flex flex-col gap-6 text-center md:text-left'>
          <div className='w-full'>
            <TypographyH1>
              Olá,<br />
              sou João Lucas,<br /> 
              Desenvolvedor
            </TypographyH1>
          </div>

          <div className='text-lg text-muted-foreground leading-relaxed'>
            <p>
              Desenvolvedor de software apaixonado por criar soluções e resolver
              problemas do mundo real.
            </p>

            <p>Aqui vocês vão poder encontrar mais sobre meus projetos!</p>
          </div>

          <div className='mt-4 flex justify-center md:justify-start'>
            <Link className={cn(buttonVariants({ variant: "default" })) + " w-full sm:w-80 h-10 text-base"} href='/contact' >Entrar em contato</Link>
          </div>
        </div>

        <div className='w-full md:w-1/3 flex justify-center md:justify-end'>
          <Avatar className='w-56 h-56 md:w-80 md:h-80'>
            <AvatarImage src="profile.jpg"/>
            <AvatarFallback>JL</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
}