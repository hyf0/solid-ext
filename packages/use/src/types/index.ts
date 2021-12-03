import type { Accessor, Setter } from 'solid-js'

export type MaybeReactiveGetter<T> = ReactiveGetter<T> | T

export type ReactiveGetter<T> = Accessor<T>
export type ReactiveSetter<T> = Setter<T>

export type AnyFn = (...args: any[]) => any

export type Fn = () => void

export interface Pausable {
  /**
   * A Getter indicate whether a pusable instance is active
   */
  active: ReactiveGetter<boolean>

  /**
   * Temporary pause the effect from executing
   */
  pause: Fn

  /**
   * Resume the effects
   */
  resume: Fn

  /**
   * Resume the effects
   */
   toggle: Fn
}

// export interface Stoppable {
//   /**
//    * A Getter indicate whether a stoppable instance is executing
//    */
//   getIsPending: Getter<boolean>

//   /**
//    * Stop the effect from executing
//    */
//   stop: Fn

//   /**
//    * Start the effects
//    */
//   start: Fn
// }

export type Cancelable = () => void

export type CleanUpEffect = (() => void) | void

export type Effect = () => CleanUpEffect

export type Position = {
  x: number
  y: number
}

export * from './ElementRef'