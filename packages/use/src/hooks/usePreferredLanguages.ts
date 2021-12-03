import { ReactiveGetter } from '@src/types'
import { useEventListener, useState } from '.'

/**
 * @description
 * Reactive Navigator Languages.
 * @category Isomorphic
 */
export function usePreferredLanguages(): ReactiveGetter<readonly string[]> {
  const navigator = window.navigator
  const [value, setValue] = useState<readonly string[]>(navigator.languages)

  useEventListener(window, 'languagechange', () => {
    setValue(navigator.languages)
  })

  return value
}
