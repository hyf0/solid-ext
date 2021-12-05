import { createSignal } from 'solid-js'
import { MaybeGetter, Setter, Getter } from './types'

export function get<T>(maybeGetter: MaybeGetter<T>) {
  return maybeGetter instanceof Function ? maybeGetter() : maybeGetter
}

export function reactify<T>(maybe: MaybeGetter<T>): [Getter<T>, Setter<T>] {
  if (maybe instanceof Function) {
    return [maybe, noop as any]
  } else {
    return createSignal(maybe)
  }
}

export const noop = () => {}
