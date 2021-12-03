import { CleanUpEffect, Effect } from '@src/types'
import { createRenderEffect, onCleanup } from 'solid-js'

/**
 * @description
 * A React style wrapper of `createRenderEffect` + `onCleanup`.
 * - `useLayoutEffect` will ensure `cleanUp` is executed before next `effect` being executed.
 * - `cleanUp` will be executed when the lifecycle `onCleanUp` is executed
 * 
 * @category Isomorphic Hook
 * @category React Style Hook
 */
export function useLayoutEffect(effect: Effect) {
  let cleanUp: CleanUpEffect
  createRenderEffect(() => {
    if (cleanUp) {
      cleanUp()
      cleanUp = undefined
    }
    cleanUp = effect()
  })
  onCleanup(() => {
    cleanUp?.()
  })
}
