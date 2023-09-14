# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  A component "mounted" to the DOM when it has been rendered. It happens in the lifecycle of a component after it has been created & initialized but before it becomes visible to user.
- What is a React Effect?
  React effect refers to a function that you can define to manage side effects in your components. These side effects include data fetching, DOM manipulation, etc to function correctly. Effects let you specify side effects that are caused by rendering itself.
- When should you use an Effect and when should you not use an Effect?
  You should use Effect when you need to manage side effects or perform certain actions that are not directly related to rendering but are necessary for your component to function correctly. You can use it for data fetching, DOM manipulation, timers, & synchronization.
  -You should not use Effect when you don't need side effects for simple state updates, pure rendering, & conditional rendering.
- When do Effects run?
  Effects run after the component has rendered. It usually run after the initial render, after every render, & for the cleanup function.
- What function is used to declare an Effect?
  You declare an effect by using the "useEffect" hook. It is a built-in React hook that allows you to perform side effects in your functional components.
- What are Effect dependencies and how do you declare them?
  Effect dependencies are values that you specify as an optional second argument to the "useEffect" hook. The dependencies are used to control when the effect should run. You declare effect dependencies by using the "useEffect" hook.
- Why would you want to clean up from an Effect?
  You would want to clean up from an Effect because it is good for resource management, prevent memory leaks, helps avoid unexpected behavior, makes your code more predictable & contributes to maintainable code.
- How do you clean up from an Effect?
  You clean up from an Effect by returning a function from the effect itself. It is called the "cleanup" or "teardown" function. React will automatically invoke this cleanup function when the component unmounts or when the dependencies specified in the effect's dependency array change.
- When does the cleanup function run?
  The cleanup function runs when the component unmounts (from the DOM) & when the dependencies change.

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
