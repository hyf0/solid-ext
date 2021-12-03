import { useInterval, useState } from '@solid-ext/use'

export function UseInterval() {
  const [count, setCount] = useState(0)

  const interval = useInterval(() => {
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
