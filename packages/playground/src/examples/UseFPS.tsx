import { useFPS } from '@solid-ext/use'

export function UseFPS() {
  const fps = useFPS()

  return (
    <div>
      FPS: {fps()}
    </div>
  )
}
