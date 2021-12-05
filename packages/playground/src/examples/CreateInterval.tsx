import { createInterval } from '@solid-ext/core'
import { createSignal } from 'solid-js'

export function CreateInterval() {
  const [count, setCount] = createSignal(0)

  const interval = createInterval(() => {
    setCount((prev) => prev + 1)
  }, 500)

  return (
    <div>
      count: {count()}
      <button
        onClick={() => {
          interval.toggle()
        }}
      >
        {interval.active() ? 'pause' : 'resumu'}
      </button>
    </div>
  )
}
