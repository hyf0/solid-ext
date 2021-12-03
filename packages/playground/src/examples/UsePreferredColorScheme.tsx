import { usePreferredColorScheme } from '@solid-ext/use'

export function UsePreferredColorScheme() {
  const preferredColorScheme = usePreferredColorScheme()

  return (
    <div>
      preferredColorScheme: {preferredColorScheme()}
    </div>
  )
}
