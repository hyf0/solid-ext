import { useMediaQuery, useMemo } from '@src/hooks'

export type ColorSchemeType = 'dark' | 'light' | 'no-preference'

/**
 * @description
 * Reactive prefers-color-scheme media query.
 * 
 * @category Isomorphic Hook
 */
export function usePreferredColorScheme() {
  const isLight = useMediaQuery('(prefers-color-scheme: light)')
  const isDark = useMediaQuery('(prefers-color-scheme: dark)')

  return useMemo(() => {
    if (isDark()) {
      return 'dark'
    } else if (isLight()) {
      return 'light'
    } else {
      return 'no-preference'
    }
  })
}
