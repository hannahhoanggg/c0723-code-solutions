# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?
  Context that allows you to share data between components without having to pass props manually through each level of the component tree. It provides a way to manage global state or share specific data with components that need it. The main purpose is to simplify the process of prop drilling, which is the practice of passing data thru multiple levels of nested components.
- What values can be stored in context?
  The values that can be stored in context are objects, functions, primitives (strings, numbers, booleans, null), arrays. callback functions & custom data structures. It could be anything!!
- How do you create context and make it available to the components?
  You create a context using the createContext() method. You make it available to components by wrapping the app with the provider component.
- How do you access the context values?
  You access the context values by using the "useContext" hook or the consumer component but using the hook is more generally recommended because it provides a more concise & readable way to access context values.
- When would you use context? (in addition to the best answer: "rarely")
  The decision to use context should be based on specific requirements of your app & the need to share data or functionality across components efficiently.

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
