# react-rendering-lists-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When would we want to dynamically create a list of React components?
  You want to dynamically create a list of React components when you want to render a component for array of data, based on certain conditions, and when building forms with dynamic input fields.
- Why is it important for React components to be data-driven?
  It is important for React components to be data-driven because it can be reused across different parts of your application. It allows you to easily update the content without modifying the component structure itself.
- Where in the component code would a list of React components typically be built?
  A list of components is typically built within the component's render method, this is where you define teh JSX that represent the UI you want to render.
- What `Array` method is commonly used to create a list of React components?
  The map method is commonly used to create a list of React components that iterates over each element in an array & applies a function to each elements, & it returns a new array with the results of those function calls.
- Why do components in a list need to have unique keys?
  Components in a list need to have unique keys because keys tell which array item in each component it corresponds to so it can match them up later & it efficiently update the UI when the list changes to be added, removed or reordered.
- What is the best value to use as a "key" prop when rendering lists?
  The best value to use as a key prop when rendering lists is to use a string that uniquely identifies a list item among its siblings. The value should remain consistent across renders.

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
