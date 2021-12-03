import { useState, useEventListener } from '@src/hooks'
import { Position } from '@src/types'
export interface MouseOptions {
  /**
   * Listen to `touchmove` events
   *
   * @default true
   */
  touch?: boolean

  /**
   * Reset to initial value when `touchend` event fired
   *
   * @default false
   */
  resetOnTouchEnds?: boolean

  /**
   * Initial values
   * @default
   */
  initialValue?: Position
}

export type MouseSourceType = 'mouse' | 'touch' | null

/**
 * @description
 * Reactive mouse position.
 *
 * @example
 * ```tsx
 * import { useMouse } from '@solid-ext/use'
 *
 * export function UseMouse() {
 *   const { x, y, sourceType } = useMouse()
 *
 *   return (
 *     <div>
 *       sourceType: {sourceType()}, x: {x()}, y: {y()}
 *     </div>
 *   )
 * }
 * ```
 *
 * @category Browser Hook
 */
export function useMouse(options: MouseOptions = {}) {
  const {
    touch = true,
    resetOnTouchEnds = false,
    initialValue = { x: 0, y: 0 },
  } = options

  const [x, setX] = useState(initialValue.x)
  const [y, setY] = useState(initialValue.y)
  const [sourceType, setSourceType] = useState<MouseSourceType>(null)

  const mouseHandler = (event: MouseEvent) => {
    setX(event.pageX)
    setY(event.pageY)
    setSourceType('mouse')
  }
  const reset = () => {
    setX(initialValue.x)
    setY(initialValue.y)
  }
  const touchHandler = (event: TouchEvent) => {
    if (event.touches.length > 0) {
      setX(event.touches[0]!.clientX)
      setY(event.touches[0]!.clientY)
      setSourceType('touch')
    }
  }

  useEventListener(window, 'mousemove', mouseHandler, { passive: true })
  useEventListener(window, 'dragover', mouseHandler, { passive: true })
  if (touch) {
    useEventListener(window, 'touchstart', touchHandler, { passive: true })
    useEventListener(window, 'touchmove', touchHandler, { passive: true })
    if (resetOnTouchEnds) {
      useEventListener(window, 'touchend', reset, { passive: true })
    }
  }

  return {
    x,
    y,
    sourceType,
  }
}
