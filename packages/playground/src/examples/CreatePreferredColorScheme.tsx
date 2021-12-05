import { createPreferredColorScheme } from '@solid-ext/core'

export function CreatePreferredColorScheme() {
  const preferredColorScheme = createPreferredColorScheme()

  return <div>preferredColorScheme: {preferredColorScheme()}</div>
}
