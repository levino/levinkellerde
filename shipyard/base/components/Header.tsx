import React from 'react'

import type { Config } from '@/schemas/config'
interface HeaderProps {
  config: Pick<Config, 'navbar'>
}

export const Header: React.FC<HeaderProps> = ({ config }) => <div />
