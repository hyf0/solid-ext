import { get, reactify } from '@src/shared'
import { MaybeReactiveGetter, ReactiveGetter, ReactiveSetter } from '@src/types'
import { useEffect } from '.'

export interface FaviconOptions {
  baseUrl?: string
  rel?: string
}

export function useFavicon(
  newIcon: string | null | undefined,
  options?: FaviconOptions,
): [
  ReactiveGetter<string | null | undefined>,
  ReactiveSetter<string | null | undefined>,
]
export function useFavicon(
  newIcon: ReactiveGetter<string | null | undefined>,
  options?: FaviconOptions,
): void

/**
 * @example
 *
 * static
 *
 * ```ts
 *
 * const [icon, setIcon] = useFavicon('dark.png')
 * setIcon('light.png')
 *
 * ```
 * reactive
 * ```ts
 *
 * const [icon, setIcon] = createSignal('')
 *
 * useFavicon(icon)
 *
 * setIcon('dark.png')
 *
 * ```
 * @category Isomorphic Hook
 */
export function useFavicon(
  newIcon: MaybeReactiveGetter<string | null | undefined> = null,
  options: FaviconOptions = {},
):
  | void
  | [
      ReactiveGetter<string | null | undefined>,
      ReactiveSetter<string | null | undefined>,
    ] {
  const { baseUrl = '', rel = 'icon' } = options

  const [getIcon, setIcon] = reactify(newIcon)

  useEffect(() => {
    const icon = getIcon()
    if (typeof icon === 'string') {
      const snapshot: [HTMLLinkElement, string][] = []
      document.head
        .querySelectorAll<HTMLLinkElement>(`link[rel*="${rel}"]`)
        .forEach((el) => {
          snapshot.push([el, el.href])
          el.href = `${baseUrl}${icon}`
        })
      return () => {
        snapshot.forEach(([el, href]) => {
          el.href = href
        })
      }
    }
  })

  if (!(newIcon instanceof Function)) {
    return [getIcon, setIcon]
  }
}
