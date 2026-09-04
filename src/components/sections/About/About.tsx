import { TypographyH1 } from '@/components/ui/typography';

export default function About() {
  return (
    <div className='max-w-7xl mx-auto px-3 py-16 md:py-32 flex flex-col gap-10'>
      <div className='max-w-500'>
        <TypographyH1>
          Sobre mim
        </TypographyH1>
      </div>
      <div className='flex flex-col md:flex-row items-center gap-12 md:gap-8 bg-secondary text-secondary-foreground p-10'>
        <div className='w-full text-center md:text-left'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos velit itaque accusamus, distinctio et nesciunt illo iure. Ex quas quidem praesentium veniam? Sapiente eaque exercitationem sunt earum magnam iure officia. <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi nam eaque voluptas quis saepe vitae id eveniet. Deserunt unde consectetur quibusdam natus ipsa autem nulla numquam doloremque nemo, non dolorem.
        </div>
      </div>
    </div>
  )
}