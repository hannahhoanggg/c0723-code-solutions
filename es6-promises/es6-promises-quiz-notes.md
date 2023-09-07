# es6-promises-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the Event Queue model of Promises?
  Event Queue model of Promises is related to how asynchronous operations are managed in JavaScript using an event-driven architecture.
  -It is a fundamental concept used to manage the execution of asynchronous code. It works in conjunction with the Event Loop (which is responsible for executing code from the Event Queue when the call stack is empty).
- What are the three states a Promise can be in?
  The 3 states that a Promise can be in are pending, fulfilled, and rejected.
  -Pending: Initial state of a Promise. When a Promise is created, it is in a "pending" state, which means it hasn't completed yet & may be waiting for an asynchronous operation to finish.
- How do you handle the fulfillment of a Promise?
  You can handle the fulfillment of a Promise by it being successfully completing its operation. This means that the asynchronous operation it represents has succeeded & the Promise has a result value. It transitions to this state & attach a ".then()" handlers.
- How do you handle the rejection of a Promise?
  YOu can handle the rejection of a Promise by being rejected when an error or exception occurs during the execution of the asynchronous operation it represents. This means that the operation has failed in some way. It transitions to this state & attaches ".catch()" handlers, passing the reason for the rejection as an argument.

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
