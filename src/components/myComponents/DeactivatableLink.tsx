import Link from 'next/link'
import { HTMLAttributeAnchorTarget, ReactNode } from 'react'

interface DeactivatableLinkProps {
  children: ReactNode
  disabled?: boolean
  href?: string | undefined
  target?: HTMLAttributeAnchorTarget | undefined
}

export default function DeactivatableLink({ children, disabled = false, href, target }: DeactivatableLinkProps) {
  if (href && !disabled) { 
    return <Link href={href} target={target} >{children}</Link>
  }

  return <span>{children}</span>
}