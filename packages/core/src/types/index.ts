import type { Accessor as SolidGetter, Setter as SolidSetter } from 'solid-js'

export type MaybeGetter<T> = Getter<T> | T

export type Getter<T> = SolidGetter<T>
export type Setter<T> = SolidSetter<T>

export type Fn = () => void

export interface Pausable {
  /**
   * A Getter indicate whether a pusable instance is active
   */
  active: Getter<boolean>

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

export type CleanUpEffect = (() => void) | void

export type Effect = () => CleanUpEffect

export type Position = {
  x: number
  y: number
}

export * from './ElementRef'