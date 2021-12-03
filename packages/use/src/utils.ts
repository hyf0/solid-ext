export function isInBrowser() {
  return typeof window !== 'undefined'
}

export function isInNode() {
  return !isInBrowser()
}
