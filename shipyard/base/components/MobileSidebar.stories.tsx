import type { Meta, StoryObj } from '@storybook/react'

import { MobileSidebar } from './MobileSidebar'

const meta: Meta<typeof MobileSidebar> = {
  component: MobileSidebar,
}

export default meta
type Story = StoryObj<typeof MobileSidebar>

export const Simple: Story = {
  render: () => (
    <div className="h-full">
      <MobileSidebar
        local={{
          local1: {
            label: 'Local category',
            href: '#',
          },
          local2: {
            label: 'Second Local category',
            href: '#',
            active: true,
            subEntry: {
              subLocal1: {
                label: 'Sublocal category',
                subEntry: {
                  subSubLocal1: {
                    label: 'SubSublocal category',
                    href: '#',
                  },
                },
              },
              subLocal2: {
                label: 'Second Sublocal category',
                href: '#',
              },
            },
          },
        }}
        global={{
          global1: {
            label: 'Global category',
            href: '#',
            active: true,
          },
          global2: {
            label: 'Second Global category',
            href: '#',
          },
        }}
      />
    </div>
  ),
}
