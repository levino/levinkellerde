import { Link } from './Link'

export type Entry = Record<
  string,
  {
    label?: string
    href?: string
    subEntry?: Entry
    active?: boolean
  }
>

export const SidebarElement = ({ entry }: { entry: Entry }) => (
  <div className="flex flex-col text-slate-600">
    {Object.entries(entry).map(([key, entry]) => {
      const label = entry.label ?? key
      return (
        <div className="flex flex-col" key={key}>
          <Link {...entry}>{label}</Link>

          {entry.subEntry && (
            <div className="flex flex-col pl-3">
              <SidebarElement entry={entry.subEntry} key={key} />
            </div>
          )}
        </div>
      )
    })}
  </div>
)
