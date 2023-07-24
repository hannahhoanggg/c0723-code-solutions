# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  We log things to the console to debug our code.
- What is the purpose of events and event handling?
  The purpose of events is to have the system produce a signal of some kind when an event occurs and provides a mechanism by which an action can be automatically taken when the event occurs. Event handling are used to handle and verify user input, user actions, and browser actions.
- Are all possible parameters required to use a JavaScript method or function?
  No, parameters are not required but having parameters are helpful and essential to functions.
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  The method of element objects that lets you set up a function to be called when a specific type of event occurs is called addEventListener.
- What is a callback function?
  A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine/action.
- What object is passed into an event listener callback when the event fires?
  The object that is passed into an event listener callback when the event fires is the "Event" object because it contains info about the event that occurred.
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  "Event.target" is the property of the "Event" object that refers to the element on which the event is triggered. You can check by console loging the property. You can get more information by MDN's article on event:target property article.
- What is the difference between these two snippets of code?
  `js
  element.addEventListener('click', handleClick)
  `
  `js
  element.addEventListener('click', handleClick())
  `
  The first line of code is setting up the event listener to have the handleClick function as the callback to be executed when the "click" event occurs on the element. The function handleClick will only be called when the "click" event is triggered. We're passing the reference to the function.

The second line of code is executing the handleClick function and passing its return value as the callback to the "click" event listener. We are invoking it right away and the return value is passed as the event listener. We're calling the function directly.

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
