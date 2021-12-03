import { usePreferredLanguages } from '@solid-ext/use'

export function UsePreferredLanguages() {
  const langs = usePreferredLanguages()

  return (
    <div>
      Preferred languages: {JSON.stringify(langs())}
    </div>
  )
}
