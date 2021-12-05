import { createMemo } from 'solid-js'
import { createMediaQuery } from './createMediaQuery'

export type ColorSchemeType = 'dark' | 'light' | 'no-preference'

/**
 * @description
 * Reactive prefers-color-scheme media query.
 *
 * @category Primitive
 */
export function createPreferredColorScheme() {
  const isLight = createMediaQuery('(prefers-color-scheme: light)')
  const isDark = createMediaQuery('(prefers-color-scheme: dark)')

  return createMemo(() => {
    if (isDark()) {
      return 'dark'
    } else if (isLight()) {
      return 'light'
    } else {
      return 'no-preference'
    }
  })
}
