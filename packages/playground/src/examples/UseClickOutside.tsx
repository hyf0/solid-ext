import { useClickOutside, useElmRef, useState } from '@solid-ext/use'

export function UseClickOutside() {
  const ref = useElmRef()
  const [isClickOutside, setIsClickOutside] = useState(false)
  const stop = useClickOutside(ref, () => {
    setIsClickOutside(true)
  })

  return (
    <div style={{ border: '1px solid black' }} ref={ref}>
      isClickOutside {JSON.stringify(isClickOutside())}
      <button onClick={() => setIsClickOutside(false)}>Reset</button>
    </div>
  )
}
