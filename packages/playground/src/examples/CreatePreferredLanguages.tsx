import { createPreferredLanguages } from "@solid-ext/core"

export function CreatePreferredLanguages() {
  const langs = createPreferredLanguages()

  return (
    <div>
      Preferred languages: {JSON.stringify(langs())}
    </div>
  )
}
