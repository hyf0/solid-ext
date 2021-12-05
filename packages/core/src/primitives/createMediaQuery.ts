import { createSignal } from 'solid-js'
import { useEffect } from './react-compat'

/**
 * @example
 * ```tsx
 * const isPreferDrak = createMediaQuery('(prefers-color-scheme: dark)')
 * ```
 * @category Primitive
 */
export function createMediaQuery(query: string) {
  const [matches, setMatches] = createSignal(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    setMatches(mediaQuery.matches)

    const update = () => {
      const mediaQuery = window.matchMedia(query)
      setMatches(mediaQuery.matches)
    }

    if ('addEventListener' in mediaQuery) {
      mediaQuery.addEventListener('change', update)
    } else {
      mediaQuery.addListener(update)
    }

    return () => {
      if ('removeEventListener' in update) {
        mediaQuery.removeEventListener('change', update)
      } else {
        mediaQuery.removeListener(update)
      }
    }
  })

  return matches
}
