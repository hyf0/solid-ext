import { createMediaQuery } from './createMediaQuery'

/**
 * @description
 * Reactive prefers-color-scheme media query.
 * @category Primitive
 */
export function createPreferredDark() {
  return createMediaQuery('(prefers-color-scheme: dark)')
}
