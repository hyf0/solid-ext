import { useRaf, useState } from '@src/hooks'
import { ReactiveGetter } from '@src/types'

/**
 * @category Isomorphic
 */
export function useFPS(): ReactiveGetter<number> {
  const [fps, setFPS] = useState(0)
  let last = performance.now()
  let ticks = 0

  useRaf(() => {
    ticks += 1
    if (ticks >= 10) {
      const now = performance.now()
      const diff = now - last
      setFPS(Math.round(1000 / (diff / ticks)))
      last = now
      ticks = 0
    }
  })

  return fps
}
