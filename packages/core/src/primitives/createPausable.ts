import { Pausable } from '@src/types'
import { createSignal } from 'solid-js'

/**
 * @category Primitive
 */
export function createPausable(initActive = true): Pausable {
  const [active, setActive] = createSignal(initActive)

  return {
    active,
    pause() {
      setActive(false)
    },
    resume() {
      setActive(true)
    },
    toggle() {
      setActive((prev) => !prev)
    },
  }
}
