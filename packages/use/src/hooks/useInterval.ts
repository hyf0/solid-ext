import { Pausable } from '@src/types'
import { AnyFn, MaybeReactiveGetter, useEffect } from '..'
import { get, noop } from '../shared'
import { usePausable } from './usePausable'

/**
 * @category Isomorphic
 */
export function useInterval(
  fn: AnyFn,
  maybeDelay: MaybeReactiveGetter<number>,
): Pausable {
  const pausable = usePausable()
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
