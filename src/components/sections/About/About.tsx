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
          <p>
            Minha experiência abrange o desenvolvimento frontend e backend. Possuo
            vivência prática na construção de interfaces com Next.js e React, e
            também no desenvolvimento de APIs em C# (ecossistema .NET) e Python
            (FastAPI/Flask).
          </p>

          <p>
            Essa base técnica me proporciona uma visão completa do ciclo de vida
            do produto, permitindo a entrega de projetos integrados de ponta a
            ponta.
          </p>
        </div>
      </div>
    </div>
  )
}