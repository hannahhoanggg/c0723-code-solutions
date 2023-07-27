# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  The event.target property is when an event occurs (click, mouseover, keydown) on an element in a web page, an event object is created by the browser to hold info about the event.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  It is possible to listen for events on one element that happen on its descendent elements due to event delegation. It allows events to bubble up or capture down through the DOM.
- What DOM element property tells you what type of element it is?
  The tagName DOM element propery tells you what type of element it is.
- What does the `element.closest()` method take as its argument and what does it return?
  The element.closest takes a selector string as its arguments and it returns the closest ancestor element.
- How can you remove an element from the DOM?
  You can remove an element from the DOM by using the remove method.
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  If you want to insert new clickable DOM elements into the page using JS, you could add a single event listener to a parent element and use the event.target to determine the child element that was clicked.

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
