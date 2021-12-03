import { CleanUpEffect, Effect } from '@src/types'
import { createEffect, onCleanup } from 'solid-js'

/**
 * @example
 * ```
 * export function useTitle(title: MaybeGetter<string>) {
 *   useEffect(() => {
 *     const prevTitle = document.title
 *     document.title = get(title)
 *     return () => {
 *       document.title = prevTitle
 *     }
 *   })
 * }
 * ```
 * 
 * @description
 * A React style wrapper of `createEffect` + `onCleanup`.
 * - `useEffect` will ensure `cleanUp` is executed before next `effect` being executed.
 * - `cleanUp` will be executed when the lifecycle `onCleanUp` is executed
 * 
 * @category Isomorphic
 * @category React Style
 */
export function useEffect(effect: Effect) {
  let cleanUp: CleanUpEffect
  createEffect(() => {
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
