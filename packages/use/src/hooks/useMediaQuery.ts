import { useEffect, useState } from '@src/hooks'

/**
 * @category Isomorphic
 */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

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
