import { PropsWithChildren } from 'react'

import { cn } from '@shipyard/ui/lib/utils'

export const Link: React.FC<
  PropsWithChildren<{ href?: string; active?: boolean; onClick?: () => void }>
> = ({ href, children, active, onClick }) => (
  <a
    onClick={
      onClick
        ? (event) => {
            event.preventDefault()
            onClick()
          }
        : undefined
    }
    className={cn('flex pl-2 leading-8', {
      'hover:bg-accent': href && !active,
      'text-slate-400': !href,
      'bg-accent/50': active,
    })}
    href={href ?? '#'}
  >
    {children}
  </a>
)
