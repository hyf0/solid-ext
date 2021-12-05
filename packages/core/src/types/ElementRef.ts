export type CommonElement = HTMLElement | SVGElement

/**
 * ElementRef is a function with extra property `current`.
 */
export type ElementRef<T extends CommonElement = CommonElement> = {
  (element: T): void
  current: T | null
}

export type ElementOrElementRef<T extends CommonElement = CommonElement> =
  | T
  | ElementRef<T>

export function isElementRef<T extends CommonElement>(
  ref: ElementOrElementRef<T>,
): ref is ElementRef<T> {
  return ref instanceof Function && 'current' in ref
}

export function unrefElement<T extends CommonElement>(
  ref: ElementOrElementRef<T>,
) {
  if (isElementRef(ref)) {
    return ref.current
  } else {
    return ref
  }
}
