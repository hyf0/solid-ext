import { useMediaQuery } from '@src/hooks'

/**
 * @description
 * Reactive prefers-color-scheme media query.
 * @category Isomorphic
 */
export function usePreferredDark() {
  return useMediaQuery('(prefers-color-scheme: dark)')
}
