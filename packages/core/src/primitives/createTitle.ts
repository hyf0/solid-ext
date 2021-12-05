import { Getter, Setter } from '..'
import { reactify } from '../shared'
import { MaybeGetter } from '../types'
import { useEffect } from './react-compat'

export function createTitle(
  title?: string | undefined,
): [Getter<string | undefined>, Setter<string | undefined>]
export function createTitle(title?: Getter<string | undefined>): void

/**
 * @category Primitive
 */
export function createTitle(
  maybeTitle?: MaybeGetter<string | undefined>,
):
  | void
  | [Getter<string | undefined>, Setter<string | undefined>] {
  const [title, setTitle] = reactify(maybeTitle)
  useEffect(() => {
    const t = title()
    if (typeof t === 'string') {
      const prevTitle = document.title
      document.title = t
      return () => {
        document.title = prevTitle
      }
    }
  })
  if (typeof maybeTitle === 'string') {
    return [title, setTitle]
  }
}
