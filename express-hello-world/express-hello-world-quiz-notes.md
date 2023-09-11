# express-hello-world-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express middleware?
  Express middleware are functions that have access to the request object (req), the response object(res), & the next middleware function in the application's request-response cycle.
- What is Express middleware useful for?
  Express middleware is useful to execute any code, make changes to the request & response objects, end the request-response cycle, & call the next middelware function in the stack.
- How do you mount a middleware with an Express application?
  In Express, you can mount a middleware to the application by using the "app.use()" method.
- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  The Express application pass important middleware to manage the request/response lifecycle of the server by the "req" & "res" & "next" objects.
  -The "req" object represents the HTTP request & contains info about the incoming request from the client.
  -The "res" object represents the HTTP response & is used to send a response back to the client.

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
