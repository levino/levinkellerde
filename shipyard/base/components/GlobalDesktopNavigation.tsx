import type { Config } from '@/schemas/config'

export const GlobalDesktopNavigation: React.FC<
  Pick<Config, 'brand' | 'navigation'>
> = ({ brand, navigation }) => (
  <div className="navbar bg-base-100">
    <div className="flex-1">
      <a href="/" className="btn btn-ghost text-xl">
        {brand}
      </a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        {Object.entries(navigation).map(([key, entry]) =>
          entry.subEntry ? (
            <li key={key}>
              <details>
                <summary>{entry.label ?? key}</summary>
                <ul className="rounded-t-none bg-base-100 p-2">
                  {Object.entries(entry.subEntry).map(([key, entry]) => (
                    <li key={key}>
                      <a href={entry.href}>{entry.label ?? key}</a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ) : (
            <li key={key}>
              <a href={entry.href}>{entry.label ?? key}</a>
            </li>
          ),
        )}
      </ul>
    </div>
  </div>
)
