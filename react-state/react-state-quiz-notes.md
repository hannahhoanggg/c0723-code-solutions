# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  "Hooks" are functions that allow you to "hook into" React state & lifecycle features from functional components. It is a way to use state & other React features without writing class components.
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

1. Only call hooks at the top level (of functional component or inside custom hooks)
2. Only call hooks from react functions
3. Hooks should be called in the same order (the order matters)
4. Don't call hooks conditionally (should be unconditionally in every render)
5. Only call hooks from react components
6. Use hooks only for their intended purpose (each hook has specific purpose)
7. Custom hooks should start with "use"

- What is the purpose of state in React?
  State refers to an internal data storage mechanism that allows components to store & manage dynamic data. It is to enable a component to keep track of info that can change over time & re-render itself when data changes.
- Why can't we just maintain state in a local variable?
  React requires state variables as it does not keep track of local variables so when you attempt to modify them, React does not re-render the DOM.
- What two actions happen when you call a `state setter` function?
  When you call a state setter function, you update the state value and triggering component re-render.
- When does the local `state variable` get updated with the new value?
  When you call a state setter function, the local state variable doesn't immediately get updated with the new value. It updates before the next render cycle.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
