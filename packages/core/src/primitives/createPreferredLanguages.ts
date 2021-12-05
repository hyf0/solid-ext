import { Getter } from '@src/types'
import { createSignal } from 'solid-js'
import { createEventListener } from './createEventListener'

/**
 * @description
 * Reactive Navigator Languages.
 * @category Primitive
 */
export function createPreferredLanguages(): Getter<readonly string[]> {
  const navigator = window.navigator
  const [value, setValue] = createSignal<readonly string[]>(navigator.languages)

  createEventListener(window, 'languagechange', () => {
    setValue(navigator.languages)
  })

  return value
}
