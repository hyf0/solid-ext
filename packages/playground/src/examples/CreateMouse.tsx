import { createMouse } from '@solid-ext/core'

export function CreateMouse() {
  const { x, y, sourceType } = createMouse()

  return (
    <div>
      sourceType: {sourceType()}, x: {x()}, y: {y()}
    </div>
  )
}
