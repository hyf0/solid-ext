import { get } from '../shared'
import { MaybeGetter, Pausable } from '../types'
import { createPausable } from './createPausable'
import { useEffect } from './react-compat'

/**
 * @description
 * requestIdleCallback
 * 
 * @category Primitive
 */
export function createRic(
  fn: IdleRequestCallback,
  options: MaybeGetter<IdleRequestOptions> = {},
): Pausable {
  const pausable = createPausable()

  useEffect(() => {
    if (pausable.active()) {
      const scheule: IdleRequestCallback = (...args) => {
        fn(...args)
        rICId = window.requestIdleCallback(scheule, get(options))
      }
      let rICId = window.requestIdleCallback(scheule)
      return () => {
        window.cancelIdleCallback(rICId)
      }
    }
  })
  return pausable
}
