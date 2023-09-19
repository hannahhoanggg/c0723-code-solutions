# fetch-in-react-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How can `useEffect` be used to load data for a component?
  You can "useEffect" to load data for a component by running code that fetches or updates data when the component mounts & when dependencies change.
- What browser function can be used to make HTTP requests to a server in React?
  The built-in browser API for making HTTP requests to a server is the fetch() function.
- How do you use `useEffect` to load component data just once when the component mounts?
  To use the "useEffect" to load component data just once when the component mounts by passing an empty dependency array as the second argument to "useEffect". This will tell React to run the effect only when the component initially mounts & not re-run it on the subsequent re-renders/updates.
- How do you use `useEffect` to load component data every time the data key changes?
  You can use "useEffect" to load component data every time the data key changes by including the dependency in the dependency array of "useEffect". When the dependency in the array changes, the effect will be triggered.
- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  -Loading & managing backend data efficiently & effectively is crucial for performance, scalability & maintainability.
  Some good open source packages are React Query and Vercel SWR work.

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
