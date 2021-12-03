import { Pausable } from '@src/types'
import { useState } from '@src/hooks'

/**
 * @category Isomorphic Hook
 */
export function usePausable(initActive = true): Pausable {
  const [active, setActive] = useState(initActive)

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
