import { useEffect } from '@src/hooks'
import { ReactiveGetter, ReactiveSetter } from '..'
import { reactify } from '../shared'
import { MaybeReactiveGetter } from '../types'

export function useTitle(
  title?: string | undefined,
): [ReactiveGetter<string | undefined>, ReactiveSetter<string | undefined>]
export function useTitle(title?: ReactiveGetter<string | undefined>): void

/**
 * @category Isomorphic
 */
export function useTitle(
  maybeTitle?: MaybeReactiveGetter<string | undefined>,
):
  | void
  | [ReactiveGetter<string | undefined>, ReactiveSetter<string | undefined>] {
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
