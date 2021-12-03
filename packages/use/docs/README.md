# @solid-ext/use

## Table of contents

### Interfaces

- [FaviconOptions](interfaces/FaviconOptions.md)
- [InferEventTarget](interfaces/InferEventTarget.md)
- [MouseOptions](interfaces/MouseOptions.md)
- [Pausable](interfaces/Pausable.md)

### Type aliases

- [AnyFn](README.md#anyfn)
- [Cancelable](README.md#cancelable)
- [CleanUpEffect](README.md#cleanupeffect)
- [ColorSchemeType](README.md#colorschemetype)
- [DocumentEventName](README.md#documenteventname)
- [Effect](README.md#effect)
- [ElementOrElementRef](README.md#elementorelementref)
- [ElementRef](README.md#elementref)
- [Fn](README.md#fn)
- [HTMLElementEventName](README.md#htmlelementeventname)
- [MaybeReactiveGetter](README.md#maybereactivegetter)
- [MouseSourceType](README.md#mousesourcetype)
- [Position](README.md#position)
- [ReactiveGetter](README.md#reactivegetter)
- [ReactiveSetter](README.md#reactivesetter)
- [UseFullscreenReturn](README.md#usefullscreenreturn)
- [WindowEventName](README.md#windoweventname)

### Browser Functions

- [useFullscreen](README.md#usefullscreen)
- [useMouse](README.md#usemouse)

### Isomorphic Functions

- [useClickOutside](README.md#useclickoutside)
- [useEffect](README.md#useeffect)
- [useElmRef](README.md#useelmref)
- [useEventListener](README.md#useeventlistener)
- [useFPS](README.md#usefps)
- [useFavicon](README.md#usefavicon)
- [useInterval](README.md#useinterval)
- [useLayoutEffect](README.md#uselayouteffect)
- [useMediaQuery](README.md#usemediaquery)
- [useMemo](README.md#usememo)
- [usePreferredLanguages](README.md#usepreferredlanguages)
- [useRaf](README.md#useraf)
- [useRic](README.md#useric)
- [useState](README.md#usestate)
- [useTitle](README.md#usetitle)

### Isomorphic
Reactive prefers-color-scheme media query. Functions

- [usePreferredColorScheme](README.md#usepreferredcolorscheme)

### Other Functions

- [isElementRef](README.md#iselementref)
- [unrefElement](README.md#unrefelement)

### React Style Functions

- [useEffect](README.md#useeffect)
- [useLayoutEffect](README.md#uselayouteffect)
- [useMemo](README.md#usememo)
- [useState](README.md#usestate)

## Type aliases

### AnyFn

Ƭ **AnyFn**: (...`args`: `any`[]) => `any`

#### Type declaration

▸ (...`args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any`

#### Defined in

[types/index.ts:8](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/types/index.ts#L8)

___

### Cancelable

Ƭ **Cancelable**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[types/index.ts:51](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/types/index.ts#L51)

___

### CleanUpEffect

Ƭ **CleanUpEffect**: () => `void` \| `void`

#### Defined in

[types/index.ts:53](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/types/index.ts#L53)

___

### ColorSchemeType

Ƭ **ColorSchemeType**: ``"dark"`` \| ``"light"`` \| ``"no-preference"``

#### Defined in

[hooks/usePreferredColorScheme.ts:3](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/usePreferredColorScheme.ts#L3)

___

### DocumentEventName

Ƭ **DocumentEventName**: keyof `DocumentEventMap`

#### Defined in

[hooks/useEventListener.ts:7](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/useEventListener.ts#L7)

___

### Effect

Ƭ **Effect**: () => [`CleanUpEffect`](README.md#cleanupeffect)

#### Type declaration

▸ (): [`CleanUpEffect`](README.md#cleanupeffect)

##### Returns

[`CleanUpEffect`](README.md#cleanupeffect)

#### Defined in

[types/index.ts:55](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/types/index.ts#L55)

___

### ElementOrElementRef

Ƭ **ElementOrElementRef**<`T`\>: `T` \| [`ElementRef`](README.md#elementref)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `HTMLElement` |

#### Defined in

[types/ElementRef.ts:9](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/types/ElementRef.ts#L9)

___

### ElementRef

Ƭ **ElementRef**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `HTMLElement` |

#### Call signature

▸ (`element`): `void`

ElementRef is a function with extra property `current`.

##### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `T` |

##### Returns

`void`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `current` | `T` \| ``null`` |

#### Defined in

[types/ElementRef.ts:4](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/types/ElementRef.ts#L4)

___

### Fn

Ƭ **Fn**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[types/index.ts:10](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/types/index.ts#L10)

___

### HTMLElementEventName

Ƭ **HTMLElementEventName**: keyof `HTMLElementEventMap`

#### Defined in

[hooks/useEventListener.ts:8](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/useEventListener.ts#L8)

___

### MaybeReactiveGetter

Ƭ **MaybeReactiveGetter**<`T`\>: [`ReactiveGetter`](README.md#reactivegetter)<`T`\> \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[types/index.ts:3](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/types/index.ts#L3)

___

### MouseSourceType

Ƭ **MouseSourceType**: ``"mouse"`` \| ``"touch"`` \| ``null``

#### Defined in

[hooks/useMouse.ts:25](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/useMouse.ts#L25)

___

### Position

Ƭ **Position**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[types/index.ts:57](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/types/index.ts#L57)

___

### ReactiveGetter

Ƭ **ReactiveGetter**<`T`\>: `Accessor`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[types/index.ts:5](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/types/index.ts#L5)

___

### ReactiveSetter

Ƭ **ReactiveSetter**<`T`\>: `Setter`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[types/index.ts:6](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/types/index.ts#L6)

___

### UseFullscreenReturn

Ƭ **UseFullscreenReturn**: `ReturnType`<typeof [`useFullscreen`](README.md#usefullscreen)\>

#### Defined in

[hooks/useFullscreen.ts:131](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/useFullscreen.ts#L131)

___

### WindowEventName

Ƭ **WindowEventName**: keyof `WindowEventMap`

#### Defined in

[hooks/useEventListener.ts:6](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/useEventListener.ts#L6)

## Browser Functions

### useFullscreen

▸ **useFullscreen**(`target?`): `Object`

Reactive Fullscreen API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ElementOrElementRef`](README.md#elementorelementref)<`HTMLElement`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `enter` | () => `Promise`<`void`\> |
| `exit` | () => `Promise`<`void`\> |
| `isFullscreen` | `Accessor`<`boolean`\> |
| `isSupported` | `boolean` |
| `toggle` | () => `Promise`<`void`\> |

#### Defined in

[hooks/useFullscreen.ts:66](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/useFullscreen.ts#L66)

___

### useMouse

▸ **useMouse**(`options?`): `Object`

**`description`**
Reactive mouse position.

**`example`**
```tsx
import { useMouse } from '@solid-ext/use'

export function UseMouse() {
  const { x, y, sourceType } = useMouse()

  return (
    <div>
      sourceType: {sourceType()}, x: {x()}, y: {y()}
    </div>
  )
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`MouseOptions`](interfaces/MouseOptions.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `sourceType` | `Accessor`<[`MouseSourceType`](README.md#mousesourcetype)\> |
| `x` | `Accessor`<`number`\> |
| `y` | `Accessor`<`number`\> |

#### Defined in

[hooks/useMouse.ts:48](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/useMouse.ts#L48)

___

## Isomorphic Functions

### useClickOutside

▸ **useClickOutside**(`target`, `handler`): [`Fn`](README.md#fn)

**`description`**
Listen for clicks outside of an element.

**`example`**
```tsx
import { useClickOutside, useElmRef, useState } from '@solid-ext/use'

export function UseClickOutside() {
  const ref = useElmRef()
  const [isClickOutside, setIsClickOutside] = useState(false)
  const stop = useClickOutside(ref, () => {
    setIsClickOutside(true)
  })

  return (
    <div style={{ border: '1px solid black' }} ref={ref}>
      isClickOutside {JSON.stringify(isClickOutside())}
      <button onClick={() => setIsClickOutside(false)}>Reset</button>
    </div>
  )
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ElementOrElementRef`](README.md#elementorelementref)<`HTMLElement`\> |
| `handler` | (`evt`: `MouseEvent`) => `void` |

#### Returns

[`Fn`](README.md#fn)

#### Defined in

[hooks/useClickOutside.ts:32](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/useClickOutside.ts#L32)

___

### useEffect

▸ **useEffect**(`effect`): `void`

**`example`**
```
export function useTitle(title: MaybeGetter<string>) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = get(title)
    return () => {
      document.title = prevTitle
    }
  })
}
```

**`description`**
A React style wrapper of `createEffect` + `onCleanup`.
- `useEffect` will ensure `cleanUp` is executed before next `effect` being executed.
- `cleanUp` will be executed when the lifecycle `onCleanUp` is executed

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`Effect`](README.md#effect) |

#### Returns

`void`

#### Defined in

[hooks/react-compat/useEffect.ts:26](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/react-compat/useEffect.ts#L26)

___

### useElmRef

▸ **useElmRef**<`T`\>(): [`ElementRef`](README.md#elementref)<`T`\>

**`example`**

```ts
const TextInput = () => {
 const ref = useElmFn<HTMLInputElement>()

 console.log(ref.current) // => null

 onMounted(() => {
   console.log(ref.current) // => HTMLInputElement
 })

 onCleanup(() => {
   console.log(ref.current) // => HTMLInputElement
 })

 return <input ref={ref} />
}
```

**`description`**
A syntax sugar to help using refs in solid and work well with other hooks.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `HTMLElement` |

#### Returns

[`ElementRef`](README.md#elementref)<`T`\>

#### Defined in

[hooks/useElmRef.ts:30](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/useElmRef.ts#L30)

___

### useEventListener

▸ **useEventListener**<`E`\>(`event`, `listener`, `options?`): [`Fn`](README.md#fn)

**`description`**
Register using addEventListener on mounted, and removeEventListener automatically on unmounted.

Overload 1: Omitted Window target

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof `WindowEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (`ev`: `WindowEventMap`[`E`]) => `any` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

[`Fn`](README.md#fn)

#### Defined in

[hooks/useEventListener.ts:26](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/useEventListener.ts#L26)

▸ **useEventListener**<`E`\>(`target`, `event`, `listener`, `options?`): [`Fn`](README.md#fn)

**`description`**
Register using addEventListener on mounted, and removeEventListener automatically on unmounted.

Overload 2: Explicitly Window target

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof `WindowEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Window` |
| `event` | `E` |
| `listener` | (`ev`: `WindowEventMap`[`E`]) => `any` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

[`Fn`](README.md#fn)

#### Defined in

[hooks/useEventListener.ts:40](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/useEventListener.ts#L40)

▸ **useEventListener**<`E`\>(`target`, `event`, `listener`, `options?`): [`Fn`](README.md#fn)

**`description`**
Register using addEventListener on mounted, and removeEventListener automatically on unmounted.

Overload 3: Explicitly Document target

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof `DocumentEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Document` |
| `event` | `E` |
| `listener` | (`ev`: `DocumentEventMap`[`E`]) => `any` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

[`Fn`](README.md#fn)

#### Defined in

[hooks/useEventListener.ts:54](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/useEventListener.ts#L54)

▸ **useEventListener**<`T`, `E`\>(`target`, `event`, `listener`, `options?`): [`Fn`](README.md#fn)

**`description`**
Register using addEventListener on mounted, and removeEventListener automatically on unmounted.

Overlod 4: Custom RefFn target fallback

**`example`**
```tsx
const Input = () => {
 const ref = useElmRef<HTMLInputElement>()
 useEventListener(ref, 'onchange', (evt) => {})
 return <input ref={ref} />
}
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `HTMLElement` |
| `E` | extends keyof `HTMLElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ElementOrElementRef`](README.md#elementorelementref)<`T`\> |
| `event` | `E` |
| `listener` | (`ev`: `HTMLElementEventMap`[`E`]) => `any` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

[`Fn`](README.md#fn)

#### Defined in

[hooks/useEventListener.ts:76](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/useEventListener.ts#L76)

___

### useFPS

▸ **useFPS**(): [`ReactiveGetter`](README.md#reactivegetter)<`number`\>

#### Returns

[`ReactiveGetter`](README.md#reactivegetter)<`number`\>

#### Defined in

[hooks/useFPS.ts:7](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/useFPS.ts#L7)

___

### useFavicon

▸ **useFavicon**(`newIcon`, `options?`): [[`ReactiveGetter`](README.md#reactivegetter)<`string` \| ``null`` \| `undefined`\>, [`ReactiveSetter`](README.md#reactivesetter)<`string` \| ``null`` \| `undefined`\>]

**`example`**

static

```ts

const [icon, setIcon] = useFavicon('dark.png')
setIcon('light.png')

```
reactive
```ts

const [icon, setIcon] = createSignal('')

useFavicon(icon)

setIcon('dark.png')

```

#### Parameters

| Name | Type |
| :------ | :------ |
| `newIcon` | `undefined` \| ``null`` \| `string` |
| `options?` | [`FaviconOptions`](interfaces/FaviconOptions.md) |

#### Returns

[[`ReactiveGetter`](README.md#reactivegetter)<`string` \| ``null`` \| `undefined`\>, [`ReactiveSetter`](README.md#reactivesetter)<`string` \| ``null`` \| `undefined`\>]

#### Defined in

[hooks/useFavicon.ts:10](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/useFavicon.ts#L10)

▸ **useFavicon**(`newIcon`, `options?`): `void`

**`example`**

static

```ts

const [icon, setIcon] = useFavicon('dark.png')
setIcon('light.png')

```
reactive
```ts

const [icon, setIcon] = createSignal('')

useFavicon(icon)

setIcon('dark.png')

```

#### Parameters

| Name | Type |
| :------ | :------ |
| `newIcon` | [`ReactiveGetter`](README.md#reactivegetter)<`undefined` \| ``null`` \| `string`\> |
| `options?` | [`FaviconOptions`](interfaces/FaviconOptions.md) |

#### Returns

`void`

#### Defined in

[hooks/useFavicon.ts:17](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/useFavicon.ts#L17)

___

### useInterval

▸ **useInterval**(`fn`, `maybeDelay`): [`Pausable`](interfaces/Pausable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`AnyFn`](README.md#anyfn) |
| `maybeDelay` | [`MaybeReactiveGetter`](README.md#maybereactivegetter)<`number`\> |

#### Returns

[`Pausable`](interfaces/Pausable.md)

#### Defined in

[hooks/useInterval.ts:9](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/useInterval.ts#L9)

___

### useLayoutEffect

▸ **useLayoutEffect**(`effect`): `void`

**`description`**
A React style wrapper of `createRenderEffect` + `onCleanup`.
- `useLayoutEffect` will ensure `cleanUp` is executed before next `effect` being executed.
- `cleanUp` will be executed when the lifecycle `onCleanUp` is executed

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`Effect`](README.md#effect) |

#### Returns

`void`

#### Defined in

[hooks/react-compat/useLayoutEffect.ts:13](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/react-compat/useLayoutEffect.ts#L13)

___

### useMediaQuery

▸ **useMediaQuery**(`query`): `Accessor`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Accessor`<`boolean`\>

#### Defined in

[hooks/useMediaQuery.ts:6](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/useMediaQuery.ts#L6)

___

### useMemo

▸ **useMemo**<`T`\>(`fn`): `Accessor`<`T`\>

**`example`**
```
const [getA, setA] = createSignal(1)
const [getB, setB] = useState(1)

const getAB = useMemo(() => getA() + getB())

console.log(getAB()) // => 2
```

**`description`**
A React style wrapper of `createMemo`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `T` |

#### Returns

`Accessor`<`T`\>

#### Defined in

[hooks/react-compat/useMemo.ts:20](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/react-compat/useMemo.ts#L20)

___

### usePreferredLanguages

▸ **usePreferredLanguages**(): [`ReactiveGetter`](README.md#reactivegetter)<readonly `string`[]\>

**`description`**
Reactive Navigator Languages.

#### Returns

[`ReactiveGetter`](README.md#reactivegetter)<readonly `string`[]\>

#### Defined in

[hooks/usePreferredLanguages.ts:9](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/usePreferredLanguages.ts#L9)

___

### useRaf

▸ **useRaf**(`fn`): [`Pausable`](interfaces/Pausable.md)

**`description`**
requestAnimationFrame

**`example`**
```tsx
export function useFPS(): ReactiveGetter<number> {
  const [fps, setFPS] = useState(0)
  let last = performance.now()
  let ticks = 0

  useRaf(() => {
    ticks += 1
    if (ticks >= 10) {
      const now = performance.now()
      const diff = now - last
      setFPS(Math.round(1000 / (diff / ticks)))
      last = now
      ticks = 0
    }
  })

  return fps
 }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `FrameRequestCallback` |

#### Returns

[`Pausable`](interfaces/Pausable.md)

#### Defined in

[hooks/useRaf.ts:31](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/useRaf.ts#L31)

___

### useRic

▸ **useRic**(`fn`, `options?`): [`Pausable`](interfaces/Pausable.md)

**`description`**
requestIdleCallback

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `IdleRequestCallback` |
| `options` | [`MaybeReactiveGetter`](README.md#maybereactivegetter)<`IdleRequestOptions`\> |

#### Returns

[`Pausable`](interfaces/Pausable.md)

#### Defined in

[hooks/useRic.ts:12](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/useRic.ts#L12)

___

### useState

▸ **useState**<`T`\>(`initialValue`): [get: Accessor<T\>, set: Setter<T\>]

**`example`**
```
const [getB, setB] = useState(1)

console.log(getB()) // => 2
```

**`description`**
A React style wrapper of `createSignal`. It returns a pair of functions as an array: a getter and a setter.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialValue` | `T` |

#### Returns

[get: Accessor<T\>, set: Setter<T\>]

#### Defined in

[hooks/react-compat/useState.ts:17](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/react-compat/useState.ts#L17)

___

### useTitle

▸ **useTitle**(`title?`): [[`ReactiveGetter`](README.md#reactivegetter)<`string` \| `undefined`\>, [`ReactiveSetter`](README.md#reactivesetter)<`string` \| `undefined`\>]

#### Parameters

| Name | Type |
| :------ | :------ |
| `title?` | `string` |

#### Returns

[[`ReactiveGetter`](README.md#reactivegetter)<`string` \| `undefined`\>, [`ReactiveSetter`](README.md#reactivesetter)<`string` \| `undefined`\>]

#### Defined in

[hooks/useTitle.ts:6](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/useTitle.ts#L6)

▸ **useTitle**(`title?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title?` | [`ReactiveGetter`](README.md#reactivegetter)<`undefined` \| `string`\> |

#### Returns

`void`

#### Defined in

[hooks/useTitle.ts:9](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/useTitle.ts#L9)

___

## Isomorphic
Reactive prefers-color-scheme media query. Functions

### usePreferredColorScheme

▸ **usePreferredColorScheme**(): `Accessor`<``"dark"`` \| ``"light"`` \| ``"no-preference"``\>

#### Returns

`Accessor`<``"dark"`` \| ``"light"`` \| ``"no-preference"``\>

#### Defined in

[hooks/usePreferredColorScheme.ts:9](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/usePreferredColorScheme.ts#L9)

___

## Other Functions

### isElementRef

▸ **isElementRef**<`T`\>(`ref`): ref is ElementRef<T\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `HTMLElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | [`ElementOrElementRef`](README.md#elementorelementref)<`T`\> |

#### Returns

ref is ElementRef<T\>

#### Defined in

[types/ElementRef.ts:11](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/types/ElementRef.ts#L11)

___

### unrefElement

▸ **unrefElement**<`T`\>(`ref`): ``null`` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `HTMLElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | [`ElementOrElementRef`](README.md#elementorelementref)<`T`\> |

#### Returns

``null`` \| `T`

#### Defined in

[types/ElementRef.ts:17](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/types/ElementRef.ts#L17)

___

## React Style Functions

### useEffect

▸ **useEffect**(`effect`): `void`

**`example`**
```
export function useTitle(title: MaybeGetter<string>) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = get(title)
    return () => {
      document.title = prevTitle
    }
  })
}
```

**`description`**
A React style wrapper of `createEffect` + `onCleanup`.
- `useEffect` will ensure `cleanUp` is executed before next `effect` being executed.
- `cleanUp` will be executed when the lifecycle `onCleanUp` is executed

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`Effect`](README.md#effect) |

#### Returns

`void`

#### Defined in

[hooks/react-compat/useEffect.ts:26](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/react-compat/useEffect.ts#L26)

___

### useLayoutEffect

▸ **useLayoutEffect**(`effect`): `void`

**`description`**
A React style wrapper of `createRenderEffect` + `onCleanup`.
- `useLayoutEffect` will ensure `cleanUp` is executed before next `effect` being executed.
- `cleanUp` will be executed when the lifecycle `onCleanUp` is executed

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`Effect`](README.md#effect) |

#### Returns

`void`

#### Defined in

[hooks/react-compat/useLayoutEffect.ts:13](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/react-compat/useLayoutEffect.ts#L13)

___

### useMemo

▸ **useMemo**<`T`\>(`fn`): `Accessor`<`T`\>

**`example`**
```
const [getA, setA] = createSignal(1)
const [getB, setB] = useState(1)

const getAB = useMemo(() => getA() + getB())

console.log(getAB()) // => 2
```

**`description`**
A React style wrapper of `createMemo`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `T` |

#### Returns

`Accessor`<`T`\>

#### Defined in

[hooks/react-compat/useMemo.ts:20](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/react-compat/useMemo.ts#L20)

___

### useState

▸ **useState**<`T`\>(`initialValue`): [get: Accessor<T\>, set: Setter<T\>]

**`example`**
```
const [getB, setB] = useState(1)

console.log(getB()) // => 2
```

**`description`**
A React style wrapper of `createSignal`. It returns a pair of functions as an array: a getter and a setter.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialValue` | `T` |

#### Returns

[get: Accessor<T\>, set: Setter<T\>]

#### Defined in

[hooks/react-compat/useState.ts:17](https://github.com/iheyunfei/solid-ext/blob/6b29be1/packages/use/src/hooks/react-compat/useState.ts#L17)
