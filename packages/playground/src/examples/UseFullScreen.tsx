import { useFullscreen } from '@solid-ext/use'

export function UseFullScreen() {
  const fullScrell = useFullscreen()

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
