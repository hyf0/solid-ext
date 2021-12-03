/**
 * ElementRef is a function with extra property `current`.
 */
export type ElementRef<T extends HTMLElement> = {
  (element: T): void
  current: T | null
}

export type ElementOrElementRef<T extends HTMLElement> = T | ElementRef<T>

export function isElementRef<T extends HTMLElement>(
  ref: ElementOrElementRef<T>,
): ref is ElementRef<T> {
  return ref instanceof Function && 'current' in ref
}

export function unrefElement<T extends HTMLElement>(
  ref: ElementOrElementRef<T>,
) {
  if (isElementRef(ref)) {
    return ref.current
  } else {
    return ref
  }
}
