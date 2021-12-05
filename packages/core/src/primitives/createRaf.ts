import { Pausable } from '@src/types'
import { createPausable } from './createPausable'
import { useEffect } from './react-compat'

/**
 * @description
 * requestAnimationFrame
 * @example
 * ```tsx
 * export function useFPS(): ReactiveGetter<number> {
 *   const [fps, setFPS] = createSignal(0)
 *   let last = performance.now()
 *   let ticks = 0
 *
 *   createRaf(() => {
 *     ticks += 1
 *     if (ticks >= 10) {
 *       const now = performance.now()
 *       const diff = now - last
 *       setFPS(Math.round(1000 / (diff / ticks)))
 *       last = now
 *       ticks = 0
 *     }
 *   })
 *
 *   return fps
 *  }
 * ```
 * @category Primitive
 */
export function createRaf(fn: FrameRequestCallback): Pausable {
  const pausable = createPausable()
  useEffect(() => {
    if (pausable.active()) {
      const scheule: FrameRequestCallback = (...args) => {
        fn(...args)
        rAFId = window.requestAnimationFrame(scheule)
      }
      let rAFId = window.requestAnimationFrame(scheule)
      return () => {
        window.cancelAnimationFrame(rAFId)
      }
    }
  })
  return pausable
}
