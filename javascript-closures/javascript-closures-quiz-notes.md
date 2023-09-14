# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- In JavaScript, when is scope determined?
  In JavaScript, scope is determined at the time when a function is defined.
- What allows JavaScript functions to "remember" variables from their surroundings?
  JavaScript functions can "remember" variables from their surrounding scopes due to closures. It allows functions to maintain a reference to the variables from the scope in which they were created, even if those variables are no longer in scope when the function is executed.
- What values does a closure contain?
  The closure retains a reference to the variables & captures the entire scope in which it was created.
- When is a closure created?
  A closure is created when a function is defined within another function & retains access to variables & functions of the outer function.
- How can you tell if a function will be created with a closure?
  You can tell if a function will be created with a closure if the function contains references to variables that are not declared within the function.
- In React, what is one important case where you need to know if a closure was created?
  In React, one important case where you need to know if a closure was created is when working with asynchronous code or event handlers within functional components.

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
