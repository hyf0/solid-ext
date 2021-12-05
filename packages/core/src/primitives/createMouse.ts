import { Position } from '@src/types'
import { createSignal } from 'solid-js'
import { createEventListener } from './createEventListener'
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
 * import { createMouse } from '@solid-ext/core'
 *
 * export function CreateMouse() {
 *   const { x, y, sourceType } = createMouse()
 *
 *   return (
 *     <div>
 *       sourceType: {sourceType()}, x: {x()}, y: {y()}
 *     </div>
 *   )
 * }
 * ```
 *
 * @category Primitive
 */
export function createMouse(options: MouseOptions = {}) {
  const {
    touch = true,
    resetOnTouchEnds = false,
    initialValue = { x: 0, y: 0 },
  } = options

  const [x, setX] = createSignal(initialValue.x)
  const [y, setY] = createSignal(initialValue.y)
  const [sourceType, setSourceType] = createSignal<MouseSourceType>(null)

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

  createEventListener(window, 'mousemove', mouseHandler, { passive: true })
  createEventListener(window, 'dragover', mouseHandler, { passive: true })
  if (touch) {
    createEventListener(window, 'touchstart', touchHandler, { passive: true })
    createEventListener(window, 'touchmove', touchHandler, { passive: true })
    if (resetOnTouchEnds) {
      createEventListener(window, 'touchend', reset, { passive: true })
    }
  }

  return {
    x,
    y,
    sourceType,
  }
}
