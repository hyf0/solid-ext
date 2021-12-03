import { useEffect, useState } from '@src/hooks'
import { get } from '../shared'
import { MaybeReactiveGetter, Pausable } from '../types'
import { usePausable } from './usePausable'

/**
 * @description
 * requestIdleCallback
 * 
 * @category Isomorphic
 */
export function useRic(
  fn: IdleRequestCallback,
  options: MaybeReactiveGetter<IdleRequestOptions> = {},
): Pausable {
  const pausable = usePausable()

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
