import { ElementOrElementRef } from '@src/types/ElementRef'
import { useEffect } from '.'
import { Fn, MaybeReactiveGetter } from '..'
import { get, noop } from '../shared'

export type WindowEventName = keyof WindowEventMap
export type DocumentEventName = keyof DocumentEventMap
export type HTMLElementEventName = keyof HTMLElementEventMap

// export type GeneralEventListener<E = Event> = {
//   (evt: E): void
// }

export interface InferEventTarget<Events> {
  addEventListener(event: Events, fn?: any, options?: any): any
  removeEventListener(event: Events, fn?: any, options?: any): any
}

/**
 * @description
 * Register using addEventListener on mounted, and removeEventListener automatically on unmounted.
 *
 * Overload 1: Omitted Window target
 *
 */
export function useEventListener<E extends keyof WindowEventMap>(
  event: E,
  listener: (this: Window, ev: WindowEventMap[E]) => any,
  options?: boolean | AddEventListenerOptions,
): Fn

/**
 * @description
 * Register using addEventListener on mounted, and removeEventListener automatically on unmounted.
 *
 * Overload 2: Explicitly Window target
 *
 * @param target
 */
export function useEventListener<E extends keyof WindowEventMap>(
  target: Window,
  event: E,
  listener: (this: Window, ev: WindowEventMap[E]) => any,
  options?: boolean | AddEventListenerOptions,
): Fn

/**
 * @description
 * Register using addEventListener on mounted, and removeEventListener automatically on unmounted.
 *
 * Overload 3: Explicitly Document target
 *
 */
export function useEventListener<E extends keyof DocumentEventMap>(
  target: Document,
  event: E,
  listener: (this: Document, ev: DocumentEventMap[E]) => any,
  options?: boolean | AddEventListenerOptions,
): Fn

/**
 * @description
 * Register using addEventListener on mounted, and removeEventListener automatically on unmounted.
 *
 * Overlod 4: Custom RefFn target fallback
 *
 * @example
 * ```tsx
 * const Input = () => {
 *  const ref = useElmRef<HTMLInputElement>()
 *  useEventListener(ref, 'onchange', (evt) => {})
 *  return <input ref={ref} />
 * }
 * ```
 */
export function useEventListener<
  T extends HTMLElement,
  E extends keyof HTMLElementEventMap,
>(
  target: ElementOrElementRef<T>,
  event: E,
  listener: (this: Document, ev: HTMLElementEventMap[E]) => any,
  options?: boolean | AddEventListenerOptions,
): Fn

/**
 * @category Isomorphic
 */
export function useEventListener(...args: any[]) {
  let maybeTarget: MaybeReactiveGetter<EventTarget>
  let event: string
  let listener: any
  let options: any

  if (typeof args[0] === 'string') {
    ;[event, listener, options] = args
    maybeTarget = window
  } else {
    ;[maybeTarget, event, listener, options] = args
  }

  if (!maybeTarget) {
    return noop
  }

  let cleanup = noop

  useEffect(() => {
    const target = get(maybeTarget)
    target.addEventListener(event, listener, options)
    cleanup = () => {
      cleanup = noop
      target.removeEventListener(event, listener, options)
    }
    return () => cleanup()
  })

  return cleanup
}