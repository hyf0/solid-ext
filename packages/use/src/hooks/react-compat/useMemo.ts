import { createMemo } from 'solid-js'

/**
 * @example
 * ```tsx
 * const [getA, setA] = createSignal(1)
 * const [getB, setB] = useState(1)
 * 
 * const getAB = useMemo(() => getA() + getB())
 * 
 * console.log(getAB()) // => 2
 * ```
 * 
 * @description
 * A React style wrapper of `createMemo`.
 * 
 * @category Isomorphic Hook
 * @category React Style Hook
 */
export function useMemo<T>(
  fn: () => T
) {
  return createMemo<T>(fn)
}