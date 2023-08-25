# react-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is an "event" in React?
  "Event" in React refers to an occurrence that takes place within a user interface, such as clicking a button, typing in an input field, or moving the mouse pointer over an element. React provides a synthetic event system that wraps native browser events, ensuring the events work consistently across various platforms.
- What is an "event handler"? Which component declares the handler?
  "Event handler" is a function that is executed in response to a specific event occuring within a user interface. It is a function that you define to handle a particular event & it determines what action should be taken when the event occurs.
  -You declare event handlers within the components that need to respond to events. These components can be functional components or class components.
- How do you pass an event handler to a React component?
  You pass an event handler to a React component by defining the event handler function & then passing it as a prop to the component where it will be used.
  -Define the event: create the event handler function that you want to pass to the component.
  -Pass the event handler as prop: When rendering the component that needs to use the event handler, pass the event handler as prop. This makes the function available within the component so that it can be attached to appropriate element.
- What is the naming convention for event handlers?
  The naming convention for event handlers follows the pattern where you name of the specific event you're handling. It makes it clear that the function is intended to handle a particular event type.
- What is an "event handler prop"? Which component declares the prop?
  "Event handler prop" is a prop that is passed to a React component to provide it with a function that will be used as event handler. It allows the component to delegate the handling of certain events to a function defined in a parent component.
  -The component that declares the event handler propr is the parent component that provies the event handler function.
- What are some custom event handler props a component may wish to define?
  Components in React may define custom event handler props to allow users of the component to provide their own logic for handling various events. Some examples are "onSumbitForm", "onSelectOption", "onToggleModa;".
- What is the naming convention for custom event handler props?
  The naming convention for custom event handler props follows the pattern of onSomething, where the descriptive name of the event or action that the prop is meant to handle. It helps make the purpose of the prop cleanr & understandable.

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
