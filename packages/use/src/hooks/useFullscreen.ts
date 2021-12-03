import { useEventListener, useState } from '@src/hooks'
import {
  ElementOrElementRef,
  unrefElement,
} from '@src/types/ElementRef'

type FunctionMap = [
  'requestFullscreen',
  'exitFullscreen',
  'fullscreenElement',
  'fullscreenEnabled',
  'fullscreenchange',
  'fullscreenerror',
]

// from: https://github.com/sindresorhus/screenfull.js/blob/master/src/screenfull.js
const functionsMap: FunctionMap[] = [
  [
    'requestFullscreen',
    'exitFullscreen',
    'fullscreenElement',
    'fullscreenEnabled',
    'fullscreenchange',
    'fullscreenerror',
  ],
  // New WebKit
  [
    'webkitRequestFullscreen',
    'webkitExitFullscreen',
    'webkitFullscreenElement',
    'webkitFullscreenEnabled',
    'webkitfullscreenchange',
    'webkitfullscreenerror',
  ],
  // Old WebKit
  [
    'webkitRequestFullScreen',
    'webkitCancelFullScreen',
    'webkitCurrentFullScreenElement',
    'webkitCancelFullScreen',
    'webkitfullscreenchange',
    'webkitfullscreenerror',
  ],
  [
    'mozRequestFullScreen',
    'mozCancelFullScreen',
    'mozFullScreenElement',
    'mozFullScreenEnabled',
    'mozfullscreenchange',
    'mozfullscreenerror',
  ],
  [
    'msRequestFullscreen',
    'msExitFullscreen',
    'msFullscreenElement',
    'msFullscreenEnabled',
    'MSFullscreenChange',
    'MSFullscreenError',
  ],
] as any

/**
 * Reactive Fullscreen API.
 * @category Browser Hook
 */
export function useFullscreen(
  target: ElementOrElementRef<HTMLElement> = document.querySelector('html')!,
) {
  const targetRef = target
  const [isFullscreen, setIsFullscreen] = useState(false)
  let isSupported = false

  let map: FunctionMap = functionsMap[0]!

  if (!document) {
    isSupported = false
  } else {
    for (const m of functionsMap) {
      if (m[1] in document) {
        map = m
        isSupported = true
        break
      }
    }
  }

  const [REQUEST, EXIT, ELEMENT, , EVENT] = map

  async function exit() {
    if (!isSupported) return
    if (document?.[ELEMENT]) await document[EXIT]()

    setIsFullscreen(false)
  }

  async function enter() {
    if (!isSupported) return

    await exit()

    const target = unrefElement(targetRef)
    if (target) {
      await target[REQUEST]()
      setIsFullscreen(true)
    }
  }

  async function toggle() {
    if (isFullscreen()) await exit()
    else await enter()
  }

  useEventListener(
    document,
    EVENT,
    () => {
      setIsFullscreen(!!document?.[ELEMENT])
    },
    false,
  )

  return {
    isSupported,
    isFullscreen,
    enter,
    exit,
    toggle,
  }
}

export type UseFullscreenReturn = ReturnType<typeof useFullscreen>
