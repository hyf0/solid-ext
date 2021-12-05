import { Getter } from '@src/types'
import { createSignal } from 'solid-js'
import { createRaf } from './createRaf'

/**
 * @category Primitive
 */
export function createFps(): Getter<number> {
  const [fps, setFPS] = createSignal(0)
  let last = performance.now()
  let ticks = 0

  createRaf(() => {
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
