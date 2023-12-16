import React from 'react'
import { Link } from 'react-router-dom'


export default function LinkItem({ url, target, className, children, ...props }: { url: string, target?: string, className?: string, children: JSX.Element | string, props?: string }) {

  return (
    <Link
      to={ target ? { pathname: url } : url }
      rel="noopener noreferrer"
      target={ target && '_blank' }
      className={ className }
      {...props}
    >
      { children }
    </Link>
  )
}