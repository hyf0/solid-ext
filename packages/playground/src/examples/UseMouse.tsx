import { useMouse } from '@solid-ext/use'

export function UseMouse() {
  const { x, y, sourceType } = useMouse()

  return (
    <div>
      sourceType: {sourceType()}, x: {x()}, y: {y()}
    </div>
  )
}
