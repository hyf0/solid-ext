import { createSignal } from 'solid-js'

/**
 * @example
 * ```tsx
 * const [getB, setB] = useState(1)
 * 
 * console.log(getB()) // => 2
 * ```
 * 
 * @description
 * A React style wrapper of `createSignal`. It returns a pair of functions as an array: a getter and a setter.
 * 
 * @category Isomorphic Hook
 * @category React Style Hook
 */
export function useState<T>(initialValue: T) {
  return createSignal(initialValue)
}
