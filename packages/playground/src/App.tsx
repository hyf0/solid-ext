import type { Component } from 'solid-js'
import { CreateFPS } from './examples/CreateFPS'
import { CreateFullScreen } from './examples/CreateFullScreen'
import { CreateInterval } from './examples/CreateInterval'
import { CreateMediaQuery } from './examples/CreateMediaQuery'
import { CreateMouse } from './examples/CreateMouse'
import { CreatePreferredColorScheme } from './examples/CreatePreferredColorScheme'
import { CreatePreferredLanguages } from './examples/CreatePreferredLanguages'
import { OnClickOutside } from './examples/OnClickOutside'

const App: Component = () => {
  const exmples = [
    CreateMouse,
    CreateFPS,
    CreateFullScreen,
    CreateInterval,
    CreateMediaQuery,
    CreatePreferredLanguages,
    CreatePreferredColorScheme,
    OnClickOutside,
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
