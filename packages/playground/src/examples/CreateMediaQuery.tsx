import { createMediaQuery } from '@solid-ext/core'

export function CreateMediaQuery() {
  const isLargeScreen = createMediaQuery('(min-width: 1024px)')
  const isPreferredDark = createMediaQuery('(prefers-color-scheme: dark)')

  return (
    <div>
      isLargeScreen: {`${isLargeScreen()}`}; isPreferredDark:{' '}
      {`${isPreferredDark()}`}
    </div>
  )
}
