import { createFps } from '@solid-ext/core'

export function CreateFPS() {
  const fps = createFps()

  return <div>FPS: {fps()}</div>
}
