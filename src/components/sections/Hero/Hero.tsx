import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { TypographyH1 } from '@/components/ui/typography';

export default function Hero() {
  return (
    <div className='max-w-7xl mx-auto px-0.5 py-16 md:py-32'>
      <div className='flex flex-col-reverse md:flex-row items-center gap-12 md:gap-8'>
        <div className='w-full md:w-2/3 flex flex-col gap-6 text-center md:text-left'>
          <div className='w-100'>
            <TypographyH1>
              Olá,<br />
              sou João Lucas,<br /> 
              Desenvolvedor
            </TypographyH1>
          </div>

          <div className='text-lg text-muted-foreground leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quaerat perspiciatis minima neque nobis, animi amet quam, magnam reiciendis doloremque recusandae libero rerum hic doloribus commodi sed exercitationem suscipit eligendi!
          </div>

          <div className='mt-4 flex justify-center md:justify-start'>
            <Button className='w-80 h-10'>Entrar em contato</Button>
          </div>
        </div>

        <div className='w-full md:w-1/3 flex justify-center md:justify-end'>
          <Avatar className='w-56 h-56 md:w-80 md:h-80'>
            <AvatarImage src="profile1.jpg"/>
            <AvatarFallback>JL</AvatarFallback>
          </Avatar>
        </div>
      </div>

      
      
    </div>
  )
}