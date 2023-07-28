# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  The event target property returns the HTML element that triggered an event.
- What is the affect of setting an element to `display: none`?
  If you set an element to display: none, it will hide the entire element.
- What does the `element.matches()` method take as an argument and what does it return?
  The element matches method takes a selector string as an argument and returns a boolean value indicating whether the element matches the given selector.
- How can you retrieve the value of an element's attribute?
  You can retrieve the value of an element's attribute by using the getAttribute method.
- At what steps of the solution would it be helpful to log things to the console?
  It would be helpful to log things to the console before/after querying the DOM, inside the click event listener, when adding/removing the "active" class, showing/hiding view elements.
- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
  If you add another tab and view to your HTML without using event delegation, you can write your JS code by individually adding event listeners to each tab element.
- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
  If you didn't use a loop to conditionally show or hide the views in the page, your JS code could be written by using the "data view" attribute value.

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

To check the console log
console.log($view[i]);
 console.log($view[i].getAttribute('data-view'));
