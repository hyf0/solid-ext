import { Pausable } from '@src/types'
import { useEffect } from '@src/hooks'
import { usePausable } from './usePausable'

/**
 * @description
 * requestAnimationFrame
 * @example
 * ```tsx
 * export function useFPS(): ReactiveGetter<number> {
 *   const [fps, setFPS] = useState(0)
 *   let last = performance.now()
 *   let ticks = 0
 *
 *   useRaf(() => {
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
 * @category Isomorphic Hook
 */
export function useRaf(fn: FrameRequestCallback): Pausable {
  const pausable = usePausable()
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
