import { reactify } from '@src/shared'
import { MaybeGetter, Getter, Setter } from '@src/types'
import { useEffect } from './react-compat'

export interface FaviconOptions {
  baseUrl?: string
  rel?: string
}

export function createFavicon(
  newIcon: string | null | undefined,
  options?: FaviconOptions,
): [Getter<string | null | undefined>, Setter<string | null | undefined>]
export function createFavicon(
  newIcon: Getter<string | null | undefined>,
  options?: FaviconOptions,
): void

/**
 * @example
 *
 * static
 *
 * ```ts
 *
 * const [icon, setIcon] = createFavicon('dark.png')
 * setIcon('light.png')
 *
 * ```
 * reactive
 * ```ts
 *
 * const [icon, setIcon] = createSignal('')
 *
 * createFavicon(icon)
 *
 * setIcon('dark.png')
 *
 * ```
 * @category Primitive
 */
export function createFavicon(
  newIcon: MaybeGetter<string | null | undefined> = null,
  options: FaviconOptions = {},
):
  | void
  | [Getter<string | null | undefined>, Setter<string | null | undefined>] {
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
