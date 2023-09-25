# react-custom-hooks-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a React custom hook?
  React custom hook is a reusable function that encapsulates logic related to a specific task or behavior, allowing you to share & reuse that logic across different components. Custom hooks are a way to abstracct & organize the stateful & side-effect logic in your components, promoting code reusability & maintainability.
- When are custom hooks useful? When are they not required?
  Custom hooks are useful for code reusability, maintainability, and when you need to "step outside React"(to synchronize with some external system or to do something that React doesn't have a built-in API for).
  -They are not required when using simple components or component-specific logic.
- What is the syntax (or naming convention) for writing a custom hook?
  The naming convention for writing a custom hook is by using the word "use" followed by a descriptive name that represents the purpose or functionality of the hook. For example, "useCustomHookName".
- How do you call a custom hook?
  To call a custom hook, you import the custom hook function & invoke it as you would with any JavaScript function(call custom hook within your component function).
- When do custom hooks execute?
  Custom hooks execute whenever they are called within a functional component. The execution of a custom hook is similar to the execution of any regular JavaScript function. It returns the values & functions you've defined within it. Every single time it is called, it gets rendered.

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
