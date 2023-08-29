# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you define a React component?
  A React component is a reusable, self-contained unit that encapsulates a piece of the UI. It can be defined by using either a class-based syntax or a functional syntax.
- How do you use JSX in a React component?
  You use JSX in a React component by being a syntax extension for JavaScript that allows you to write HTML-like code, making it easier to describe the structure of your UI components.
- How do you declare the props a React component needs?
  In React, components can accept data from their parent components by using props. To declare the props, you specify them when defining the component.
- How do you pass props to a React component?
  You pass props to a React component by providing data to the component when you use it within another component.
- How do you include JavaScript expressions in JSX?
  You include JavaScript expressions in JSX by wrapping them in curly braces. It allows you to dynamically insert values, perform calculations & execute JavaScript logic within your JSX code.
- What are React hooks and what are the three "Rules of Hooks"?
  React hooks are functions that allow you to "hook into" React state & lifecycle features from functional components.
  -The 3 rules of hooks is to only call hooks at the top level, only call hooks from React functions, and use follow by uppercase.
- How do you manage state in a React component?
  In React, state refers to data that a component needs to maintain & manage over time. You can manage state by using the "useState" hook, which is a built-in React hook.
- How do you handle events in React?
  You handle events in React by attaching event handlers to JSX elements using camel-cased attributes & provide a function that will be executed when the event occurs. You declare it as a on something & then you pass it as a prop.
- How do you let a parent component know that an event happened?
  You can communicate from a child component to a parent component by passing callback functions as props to the child component. The child component can call the callback function when an event occurs, & the parent component will be notified of the event & can take appropriate actions.

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
