# @solid-ext/core

## Table of contents

### Interfaces

- [FaviconOptions](interfaces/FaviconOptions.md)
- [InferEventTarget](interfaces/InferEventTarget.md)
- [MouseOptions](interfaces/MouseOptions.md)
- [Pausable](interfaces/Pausable.md)

### Type aliases

- [CleanUpEffect](README.md#cleanupeffect)
- [ColorSchemeType](README.md#colorschemetype)
- [CommonElement](README.md#commonelement)
- [DocumentEventName](README.md#documenteventname)
- [Effect](README.md#effect)
- [ElementOrElementRef](README.md#elementorelementref)
- [ElementRef](README.md#elementref)
- [Fn](README.md#fn)
- [Getter](README.md#getter)
- [HTMLElementEventName](README.md#htmlelementeventname)
- [MaybeGetter](README.md#maybegetter)
- [MouseSourceType](README.md#mousesourcetype)
- [Position](README.md#position)
- [Setter](README.md#setter)
- [UseFullscreenReturn](README.md#usefullscreenreturn)
- [WindowEventName](README.md#windoweventname)

### Other Functions

- [isElementRef](README.md#iselementref)
- [unrefElement](README.md#unrefelement)

### Primitive Functions

- [createElmRef](README.md#createelmref)
- [createEventListener](README.md#createeventlistener)
- [createFavicon](README.md#createfavicon)
- [createFps](README.md#createfps)
- [createFullscreen](README.md#createfullscreen)
- [createInterval](README.md#createinterval)
- [createMediaQuery](README.md#createmediaquery)
- [createMouse](README.md#createmouse)
- [createPausable](README.md#createpausable)
- [createPreferredColorScheme](README.md#createpreferredcolorscheme)
- [createPreferredDark](README.md#createpreferreddark)
- [createPreferredLanguages](README.md#createpreferredlanguages)
- [createRaf](README.md#createraf)
- [createRic](README.md#createric)
- [createTitle](README.md#createtitle)
- [useEffect](README.md#useeffect)
- [useLayoutEffect](README.md#uselayouteffect)

### Utility Functions

- [onClickOutside](README.md#onclickoutside)

## Type aliases

### CleanUpEffect

Ƭ **CleanUpEffect**: () => `void` \| `void`

#### Defined in

types/index.ts:49

___

### ColorSchemeType

Ƭ **ColorSchemeType**: ``"dark"`` \| ``"light"`` \| ``"no-preference"``

#### Defined in

primitives/createPreferredColorScheme.ts:4

___

### CommonElement

Ƭ **CommonElement**: `HTMLElement` \| `SVGElement`

#### Defined in

types/ElementRef.ts:1

___

### DocumentEventName

Ƭ **DocumentEventName**: keyof `DocumentEventMap`

#### Defined in

primitives/createEventListener.ts:7

___

### Effect

Ƭ **Effect**: () => [`CleanUpEffect`](README.md#cleanupeffect)

#### Type declaration

▸ (): [`CleanUpEffect`](README.md#cleanupeffect)

##### Returns

[`CleanUpEffect`](README.md#cleanupeffect)

#### Defined in

types/index.ts:51

___

### ElementOrElementRef

Ƭ **ElementOrElementRef**<`T`\>: `T` \| [`ElementRef`](README.md#elementref)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`CommonElement`](README.md#commonelement) = [`CommonElement`](README.md#commonelement) |

#### Defined in

types/ElementRef.ts:11

___

### ElementRef

Ƭ **ElementRef**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`CommonElement`](README.md#commonelement) = [`CommonElement`](README.md#commonelement) |

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

types/ElementRef.ts:6

___

### Fn

Ƭ **Fn**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

types/index.ts:8

___

### Getter

Ƭ **Getter**<`T`\>: `SolidGetter`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

types/index.ts:5

___

### HTMLElementEventName

Ƭ **HTMLElementEventName**: keyof `HTMLElementEventMap`

#### Defined in

primitives/createEventListener.ts:8

___

### MaybeGetter

Ƭ **MaybeGetter**<`T`\>: [`Getter`](README.md#getter)<`T`\> \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

types/index.ts:3

___

### MouseSourceType

Ƭ **MouseSourceType**: ``"mouse"`` \| ``"touch"`` \| ``null``

#### Defined in

primitives/createMouse.ts:26

___

### Position

Ƭ **Position**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Defined in

types/index.ts:53

___

### Setter

Ƭ **Setter**<`T`\>: `SolidSetter`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

types/index.ts:6

___

### UseFullscreenReturn

Ƭ **UseFullscreenReturn**: `ReturnType`<typeof [`createFullscreen`](README.md#createfullscreen)\>

#### Defined in

primitives/createFullscreen.ts:129

___

### WindowEventName

Ƭ **WindowEventName**: keyof `WindowEventMap`

#### Defined in

primitives/createEventListener.ts:6

## Other Functions

### isElementRef

▸ **isElementRef**<`T`\>(`ref`): ref is ElementRef<T\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`CommonElement`](README.md#commonelement) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | [`ElementOrElementRef`](README.md#elementorelementref)<`T`\> |

#### Returns

ref is ElementRef<T\>

#### Defined in

types/ElementRef.ts:15

___

### unrefElement

▸ **unrefElement**<`T`\>(`ref`): ``null`` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`CommonElement`](README.md#commonelement) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | [`ElementOrElementRef`](README.md#elementorelementref)<`T`\> |

#### Returns

``null`` \| `T`

#### Defined in

types/ElementRef.ts:21

___

## Primitive Functions

### createElmRef

▸ **createElmRef**<`T`\>(): [`ElementRef`](README.md#elementref)<`T`\>

**`example`**

```ts
const TextInput = () => {
 const ref = createElmRef<HTMLInputElement>()

 console.log(ref.current) // => null

 onMounted(() => {
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
| `T` | extends [`CommonElement`](README.md#commonelement) = [`CommonElement`](README.md#commonelement) |

#### Returns

[`ElementRef`](README.md#elementref)<`T`\>

#### Defined in

primitives/createElmRef.ts:26

___

### createEventListener

▸ **createEventListener**<`E`\>(`event`, `listener`, `options?`): [`Fn`](README.md#fn)

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

primitives/createEventListener.ts:26

▸ **createEventListener**<`E`\>(`target`, `event`, `listener`, `options?`): [`Fn`](README.md#fn)

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

primitives/createEventListener.ts:40

▸ **createEventListener**<`E`\>(`target`, `event`, `listener`, `options?`): [`Fn`](README.md#fn)

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

primitives/createEventListener.ts:54

▸ **createEventListener**<`T`, `E`\>(`target`, `event`, `listener`, `options?`): [`Fn`](README.md#fn)

**`description`**
Register using addEventListener on mounted, and removeEventListener automatically on unmounted.

Overlod 4: Custom RefFn target fallback

**`example`**
```tsx
const Input = () => {
 const ref = createElmRef<HTMLInputElement>()
 createEventListener(ref, 'onchange', (evt) => {})
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

primitives/createEventListener.ts:76

___

### createFavicon

▸ **createFavicon**(`newIcon`, `options?`): [[`Getter`](README.md#getter)<`string` \| ``null`` \| `undefined`\>, [`Setter`](README.md#setter)<`string` \| ``null`` \| `undefined`\>]

**`example`**

static

```ts

const [icon, setIcon] = createFavicon('dark.png')
setIcon('light.png')

```
reactive
```ts

const [icon, setIcon] = createSignal('')

createFavicon(icon)

setIcon('dark.png')

```

#### Parameters

| Name | Type |
| :------ | :------ |
| `newIcon` | `undefined` \| ``null`` \| `string` |
| `options?` | [`FaviconOptions`](interfaces/FaviconOptions.md) |

#### Returns

[[`Getter`](README.md#getter)<`string` \| ``null`` \| `undefined`\>, [`Setter`](README.md#setter)<`string` \| ``null`` \| `undefined`\>]

#### Defined in

primitives/createFavicon.ts:10

▸ **createFavicon**(`newIcon`, `options?`): `void`

**`example`**

static

```ts

const [icon, setIcon] = createFavicon('dark.png')
setIcon('light.png')

```
reactive
```ts

const [icon, setIcon] = createSignal('')

createFavicon(icon)

setIcon('dark.png')

```

#### Parameters

| Name | Type |
| :------ | :------ |
| `newIcon` | [`Getter`](README.md#getter)<`undefined` \| ``null`` \| `string`\> |
| `options?` | [`FaviconOptions`](interfaces/FaviconOptions.md) |

#### Returns

`void`

#### Defined in

primitives/createFavicon.ts:14

___

### createFps

▸ **createFps**(): [`Getter`](README.md#getter)<`number`\>

#### Returns

[`Getter`](README.md#getter)<`number`\>

#### Defined in

primitives/createFps.ts:8

___

### createFullscreen

▸ **createFullscreen**(`target?`): `Object`

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

primitives/createFullscreen.ts:64

___

### createInterval

▸ **createInterval**(`fn`, `maybeDelay`): [`Pausable`](interfaces/Pausable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `Function` |
| `maybeDelay` | [`MaybeGetter`](README.md#maybegetter)<`number`\> |

#### Returns

[`Pausable`](interfaces/Pausable.md)

#### Defined in

primitives/createInterval.ts:9

___

### createMediaQuery

▸ **createMediaQuery**(`query`): `Accessor`<`boolean`\>

**`example`**
```tsx
const isPreferDrak = createMediaQuery('(prefers-color-scheme: dark)')
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Accessor`<`boolean`\>

#### Defined in

primitives/createMediaQuery.ts:11

___

### createMouse

▸ **createMouse**(`options?`): `Object`

**`description`**
Reactive mouse position.

**`example`**
```tsx
import { createMouse } from '@solid-ext/core'

export function CreateMouse() {
  const { x, y, sourceType } = createMouse()

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

primitives/createMouse.ts:49

___

### createPausable

▸ **createPausable**(`initActive?`): [`Pausable`](interfaces/Pausable.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `initActive` | `boolean` | `true` |

#### Returns

[`Pausable`](interfaces/Pausable.md)

#### Defined in

primitives/createPausable.ts:7

___

### createPreferredColorScheme

▸ **createPreferredColorScheme**(): `Accessor`<``"dark"`` \| ``"light"`` \| ``"no-preference"``\>

**`description`**
Reactive prefers-color-scheme media query.

#### Returns

`Accessor`<``"dark"`` \| ``"light"`` \| ``"no-preference"``\>

#### Defined in

primitives/createPreferredColorScheme.ts:12

___

### createPreferredDark

▸ **createPreferredDark**(): `Accessor`<`boolean`\>

**`description`**
Reactive prefers-color-scheme media query.

#### Returns

`Accessor`<`boolean`\>

#### Defined in

primitives/createPreferredDark.ts:8

___

### createPreferredLanguages

▸ **createPreferredLanguages**(): [`Getter`](README.md#getter)<readonly `string`[]\>

**`description`**
Reactive Navigator Languages.

#### Returns

[`Getter`](README.md#getter)<readonly `string`[]\>

#### Defined in

primitives/createPreferredLanguages.ts:10

___

### createRaf

▸ **createRaf**(`fn`): [`Pausable`](interfaces/Pausable.md)

**`description`**
requestAnimationFrame

**`example`**
```tsx
export function useFPS(): ReactiveGetter<number> {
  const [fps, setFPS] = createSignal(0)
  let last = performance.now()
  let ticks = 0

  createRaf(() => {
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

primitives/createRaf.ts:31

___

### createRic

▸ **createRic**(`fn`, `options?`): [`Pausable`](interfaces/Pausable.md)

**`description`**
requestIdleCallback

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `IdleRequestCallback` |
| `options` | [`MaybeGetter`](README.md#maybegetter)<`IdleRequestOptions`\> |

#### Returns

[`Pausable`](interfaces/Pausable.md)

#### Defined in

primitives/createRic.ts:12

___

### createTitle

▸ **createTitle**(`title?`): [[`Getter`](README.md#getter)<`string` \| `undefined`\>, [`Setter`](README.md#setter)<`string` \| `undefined`\>]

#### Parameters

| Name | Type |
| :------ | :------ |
| `title?` | `string` |

#### Returns

[[`Getter`](README.md#getter)<`string` \| `undefined`\>, [`Setter`](README.md#setter)<`string` \| `undefined`\>]

#### Defined in

primitives/createTitle.ts:6

▸ **createTitle**(`title?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title?` | [`Getter`](README.md#getter)<`undefined` \| `string`\> |

#### Returns

`void`

#### Defined in

primitives/createTitle.ts:9

___

### useEffect

▸ **useEffect**(`effect`): `void`

**`example`**
```tsx
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

primitives/react-compat/useEffect.ts:25

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

primitives/react-compat/useLayoutEffect.ts:12

___

## Utility Functions

### onClickOutside

▸ **onClickOutside**(`target`, `handler`): [`Fn`](README.md#fn)

**`description`**
Listen for clicks outside of an element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ElementOrElementRef`](README.md#elementorelementref)<[`CommonElement`](README.md#commonelement)\> |
| `handler` | (`evt`: `MouseEvent`) => `void` |

#### Returns

[`Fn`](README.md#fn)

#### Defined in

utilities/onClickOutside.ts:9
