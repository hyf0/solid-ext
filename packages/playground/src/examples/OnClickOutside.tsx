import { createElmRef, onClickOutside } from '@solid-ext/core'
import { createSignal } from 'solid-js'

export function OnClickOutside() {
  const ref = createElmRef()
  const [isClickOutside, setIsClickOutside] = createSignal(false)
  const stop = onClickOutside(ref, () => {
    setIsClickOutside(true)
  })

  return (
    <div style={{ border: '1px solid black' }} ref={ref}>
      isClickOutside {JSON.stringify(isClickOutside())}
      <button onClick={() => setIsClickOutside(false)}>Reset</button>
    </div>
  )
}
