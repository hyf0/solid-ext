import { createEventListener } from '@src/primitives/createEventListener'
import { ElementOrElementRef, unrefElement } from '@src/types'

/**
 * @description
 * Listen for clicks outside of an element.
 * @category Utility
 */
export function onClickOutside(
  target: ElementOrElementRef,
  handler: (evt: MouseEvent) => void,
) {
  return createEventListener(
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
