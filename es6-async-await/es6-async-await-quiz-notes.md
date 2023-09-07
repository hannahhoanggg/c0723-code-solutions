# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  The async & await keywords are used in JavaScript to work with asynchronous code & make it more readable & easier to manage.
  -The "async" keyword gives you a simpler way to work with asynchronous promise-based code. Inside an async function, you can use the "await" keyword before a call to a function that returns a promise.
  -The "await" keyword makes the code wait at each await until the operation is completed before proceeding further.
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  -With async & await, you can write asynchronous code that closely resembles synchronous code, making it more readable & maintainable.
  -Error handling is done using standard "try/catch" blocks, which is easier to manage & propagate errors.
  -You can use await to pause execution of an async function until problem resolves, making it easy to chain multiple asynchronous operations together.
- When do you use `async`?
  You use 'async' when you want to define a function as asynchronous. Asynchronous function can perform asynchronous operations & typically returns a promise.
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  You use 'await' when you want to pause the execution of an asynchronous function until a promise is resolved.
  -You do not use 'await' outside of 'async' functions (it will result in syntax error) or with synchronous functions (it's defined for asynchronous functions). If you attempt to 'await' a synchronous function, it will not pause the execution of your code because there's no promise involved. Function will continue to execute immediately.
- How do you handle errors with `await`?
  You handle errors with 'await' by using 'try/catch' blocks inside 'async' functions. When error occurs during execution of 'await' & promise is rejected, the control flow jumps to nearest 'catch' block, allowing you to handle error gracefully.
- What do `try`, `catch` and `throw` do? When do you use them?
  'Try', 'catch', & 'throw' are used for error handling. They allow you to handle & manage exceptions(errors) that may occur during execution of code.
  -You use 'try' when to enclose a section of code where you anticipate that error might occur.
  -You use 'catch' when to specify what to do when an exception is thrown within corresponding 'try' block.
  -You use 'throw' when to manually create & throw exceptions.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  -If you forget to use 'await' on Promise, the promise will still execute, but your code will not wait for it to resolve. The function will continue executing immediately & promise run in background. -If it rejects with an error, the error will not be caught or handled by your code. This can lead to unhandled promise rejections, which may result in uncaught exceptions.
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  I guess I prefer callbacks for now because I know how to use it & I barely understand the other asynchronous programming!

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
