import { ReactiveGetter, useState } from ".";
import { MaybeReactiveGetter, ReactiveSetter } from "./types";

export function get<T>(maybeGetter: MaybeReactiveGetter<T>) {
  return maybeGetter instanceof Function ? maybeGetter() : maybeGetter
}

export function reactify<T>(maybe: MaybeReactiveGetter<T>): [ReactiveGetter<T>, ReactiveSetter<T>] {
  if (maybe instanceof Function) {
    return [maybe, noop as any]
  } else {
    return useState(maybe);
  }
}



export const noop = () => {}