import { ReactNode } from 'react';
import Link from 'next/link';

export default function ButtonLink({ children, href }: { children: ReactNode, href: string}) {
  return (
    <Link href={href} target='_blank' className='flex items-center gap-1 bg-primary rounded-md text-primary-foreground px-2 py-1'>
      {children}
    </Link>
  )
}