import { cn } from '@shipyard/ui/lib/utils'
import { SidebarElement, type Entry } from './SidebarElement'
import { useState } from 'react'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { Link } from './Link'
import { type Config } from '../src/schemas/config'
export interface MobileSidebarProps {
  local: Entry
  global: Config
}

export const MobileSidebar: React.FC<MobileSidebarProps> = ({
  local,
  config,
}) => {
  const [shouldShowGlobal, setShowGlobal] = useState(false)
  const showGlobal = () => setShowGlobal(true)
  return (
    <div className="relative h-full w-80">
      <div
        className={cn(
          { 'left-0': shouldShowGlobal },
          { '-left-80': !shouldShowGlobal },
          'absolute z-20 h-full w-80 bg-white pl-2 transition-all duration-500',
        )}
      >
        <SidebarElement entry={global} />
      </div>

      <Link onClick={showGlobal}>
        <div className="flex items-center bg-inherit">
          <ArrowLeftIcon className="mr-1" />
          Main menu
        </div>
      </Link>
      <SidebarElement entry={local} />
    </div>
  )
}
