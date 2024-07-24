<div align="center">

<img src="https://i.kagchi.my.id/nezuko.png" alt="Logo" width="200px" height="200px" style="border-radius:50%"/>

# @kagchi/nextify

**A Utilities components for ReactJS**

[![GitHub](https://img.shields.io/github/license/KagChi/nextify)](https://github.com/KagChi/nextify/blob/main/LICENSE)
[![Discord](https://discordapp.com/api/guilds/785715968608567297/embed.png)](https://kagchi.my.id)

</div>

## Conditionals Rendering
Conditional rendering is the process of displaying different UI elements based on certain conditions. This is a common pattern in UI development, and is often used to show or hide elements based on user input, data, or other conditions.

## Show Conditional
`<Show>` renders its children when a condition is evaluated to be true. Similar to the ternary operator in JavaScript, it uses control logic flow within JSX to determine what to render
```ts
import { Show } from "@kagchi/nextify"

<Show when={data.loading}>
  <div>Loading...</div>
</Show>
```
`<Show>` has the fallback property that can be used to specify the content to be rendered when the condition evaluates to false. This property can return a JSX element.
```ts
import { Show } from "@kagchi/nextify"

<Show when={!data.loading} fallback={<div>Loading...</div>}>
  <h1>Hi, I am {data().name}.</h1>
</Show>
```

## Switch and Match Conditional
Similar to JavaScript's switch/case structure, `<Switch>` wraps multiple `<Match>` components so that each condition is evaluated in sequence. The first `<Match>` component that evaluates to true will have its children rendered, and the rest will be ignored.

```ts
import { Switch, Match } from "@kagchi/nextify"

<Switch>
  <Match when={condition1}>
    <p>Outcome 1</p>
  </Match>
  <Match when={condition2}>
    <p>Outcome 2</p>
  </Match>
</Switch>

```
Similar to `<Show>`, each `<Match>` component has a when property that is used to determine whether or not to render its children. An optional fallback property can also be passed to `<Switch>` to specify the content be rendered when none of the `<Match>` components evaluate to true.

```ts
import { Switch, Match } from "@kagchi/nextify"

<Switch fallback={<p>Fallback content</p>}>
  <Match when={condition1}>
    <p>Outcome 1</p>
  </Match>
  <Match when={condition2}>
    <p>Outcome 2</p>
  </Match>
</Switch>
```

## List Rendering
List rendering allows you to generate multiple elements from a collection of data, such as an array or object, where each element corresponds to an item in the collection.

### For
`<For>` is a looping component that allows you to render elements based on the contents of an array or object. This component is designed to be used with complex data structures, such as arrays of objects, where the order and length of the list may change frequently.

The sole property in `<For>` is each , through which you can specify the data collection to loop over. This property expects an array, however, it can also accept objects that have been converted to arrays using utilities such as Object.entries or Object.values.

```ts
import { For } from "@kagchi/nextify"

<For each={data()}>
  {(item, index) =>
    // rendering logic for each element
  }
</For>
```