import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { cn } from 'cn';

export default function NavBar() {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur'>
      <div className='max-w-7xl mx-auto flex h-14 items-center px-6'>
        <nav className='flex items-center gap-4'>
          <Link 
            href="/"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            Home
          </Link>

          <Link 
            href="/about"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            Sobre
          </Link>


          <Link 
            href="/projects"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            Projetos
          </Link>

          <Link 
            href="/contact"
            className={cn(buttonVariants({ variant: "default" }))}
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}