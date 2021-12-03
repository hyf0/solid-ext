import { noop } from '@src/shared'
import { ElementOrElementRef, unrefElement } from '@src/types'
import { isInNode } from '@src/utils'
import { useEventListener } from '.'

/**
 * @description
 * Listen for clicks outside of an element.
 *
 * @example
 * ```tsx
 * import { useClickOutside, useElmRef, useState } from '@solid-ext/use'
 *
 * export function UseClickOutside() {
 *   const ref = useElmRef()
 *   const [isClickOutside, setIsClickOutside] = useState(false)
 *   const stop = useClickOutside(ref, () => {
 *     setIsClickOutside(true)
 *   })
 *
 *   return (
 *     <div style={{ border: '1px solid black' }} ref={ref}>
 *       isClickOutside {JSON.stringify(isClickOutside())}
 *       <button onClick={() => setIsClickOutside(false)}>Reset</button>
 *     </div>
 *   )
 * }
 * ```
 *
 * @category Isomorphic
 */
export function useClickOutside(
  target: ElementOrElementRef<HTMLElement>,
  handler: (evt: MouseEvent) => void,
) {
  if (isInNode()) {
    return noop
  }

  return useEventListener(
    window,
    'click',
    (event) => {
      const el = unrefElement(target)

      if (!el || el === event.target || event.composedPath().includes(el)) {
        return
      }

      handler(event)
    },
    { passive: true, capture: true },
  )
}
