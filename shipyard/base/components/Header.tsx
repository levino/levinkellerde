import React from 'react'

import type { Config } from '@/schemas/config'
import Navbar from './Navbar'
interface HeaderProps {
  config: Pick<Config, 'navbar'>
}

export const Header: React.FC<HeaderProps> = ({ config }) => <Navbar />
