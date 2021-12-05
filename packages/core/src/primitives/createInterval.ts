import { MaybeGetter, Pausable } from '@src/types'
import { get, noop } from '../shared'
import { createPausable } from './createPausable'
import { useEffect } from './react-compat'

/**
 * @category Primitive
 */
export function createInterval(
  fn: Function,
  maybeDelay: MaybeGetter<number>,
): Pausable {
  const pausable = createPausable()
  let cancel = noop
  useEffect(() => {
    if (pausable.active()) {
      const handle = window.setInterval(fn, get(maybeDelay))
      cancel = () => {
        cancel = noop
        window.clearInterval(handle)
      }
      return () => {
        cancel()
      }
    }
  })
  return pausable
}
