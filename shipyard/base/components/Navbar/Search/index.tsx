/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Props } from '@theme/Navbar/Search'

import styles from './styles.module.css'
import { cn } from '@shipyard/ui/lib/utils'

export default function NavbarSearch({
  children,
  className,
}: Props): JSX.Element {
  return (
    <div className={cn(className, styles.navbarSearchContainer)}>
      {children}
    </div>
  )
}
