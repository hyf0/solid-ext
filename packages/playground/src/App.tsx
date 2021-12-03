import type { Component } from 'solid-js'
import { UseClickOutside } from './examples/UseClickOutside'
import { UseFPS } from './examples/UseFPS'
import { UseFullScreen } from './examples/UseFullScreen'
import { UseInterval } from './examples/UseInterval'
import { UseMediaQuery } from './examples/UseMediaQuery'
import { UseMouse } from './examples/UseMouse'
import { UsePreferredColorScheme } from './examples/UsePreferredColorScheme'
import { UsePreferredLanguages } from './examples/UsePreferredLanguages'

const App: Component = () => {
  const exmples = [
    UseMouse,
    UseFPS,
    UseFullScreen,
    UseInterval,
    UseMediaQuery,
    UsePreferredLanguages,
    UsePreferredColorScheme,
    UseClickOutside,
  ]

  return (
    <div>
      {exmples.map((Com) => (
        <>
          <h1>{Com.name}</h1>
          <div>
            <Com />
          </div>
        </>
      ))}
    </div>
  )
}

export default App
