import { useMediaQuery } from '@solid-ext/use'

export function UseMediaQuery() {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)')
  const isPreferredDark = useMediaQuery('(prefers-color-scheme: dark)')

  return (
    <div>
      isLargeScreen: {`${isLargeScreen()}`}; isPreferredDark: {`${isPreferredDark()}`}
    </div>
  )
}
