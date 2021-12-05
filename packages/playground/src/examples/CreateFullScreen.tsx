import { createFullscreen } from '@solid-ext/core'

export function CreateFullScreen() {
  const fullScrell = createFullscreen()

  return (
    <div>
      <button
        onClick={() => {
          if (fullScrell.isSupported) {
            fullScrell.toggle()
          }
        }}
      >
        {fullScrell.isSupported ? 'fullScreen' : 'Not Supported'}
      </button>
    </div>
  )
}
