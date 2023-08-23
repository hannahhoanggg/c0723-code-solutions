# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  The syntax for defining an arrow function by declaring a functionName variable with parameters (that the function accepts) being assigned to it with the arrow syntax to define an arrow function. You have curly braces with the code that the function will execute. If your function needs to return a value, you can use the 'return' keyword or you can skip the 'return' keyword & write the expression if it is a single expression.
- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  The functionality that changes when the arrow function's body is not surrounded in curly braces is by being a single expression where it's automatically being returned.
- When using _concise body syntax_, how do you return an object literal?
  When using concise body syntax, you return an object literal by wrapping the object literal in parentheses to make sure it's an expression because the braces will be treated as a function body & will not compute a return value.
- In the expression
  `js
  foo(() => 42);
  `
  - Identify the arrow function
    The arrow function is () => 42, it has no parameters.
  - How many arguments does the arrow function take?
    The arrow function takes no arguments because it's defined with an empty parameter list.
  - What value does it return?
    It returns the value of 42.
  - How many arguments are passed to the function `foo`?
    The function foo is being passed a single argument, which is the arrow function () => 42.
  - What type of argument is passed to the function `foo`?
    The argument passed to the function foo is a callback function, specifically an arrow function with no parameters that returns the value 42.
- In the expression
  `` js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
   ``

  - Identify the arrow function
    The arrow function is (y) => { console.log(`4y = ${4 * y}`); }.
  - How many arguments does the arrow function take?
    The arrow function takes one argument of y.
  - What value does it return?
    The arrow function does not have an explicit "return" statement/value. It prints a message to the console but does not return any value. It actually returns undefined.
  - How many arguments are passed to the function `bar`?
    The function bar is being passed a single argument, which is the arrow function (y) => { console.log(4y = ${4 \* y}); }.
  - What type of argument is passed to the function `bar`?
    The argument passed to the function bar is a callback function that takes one parameter.
  - When does the arrow function's code get executed?
    The function's code get executed when it is being called by the function "bar".

- How does the value of `this` differ between standard functions and arrow functions?
  In a standard function, the value of "this" keyword depends on how the function is called. The value of "this" is determined by how the function is called & not where it's defined.
  In an arrow function, the value of "this" keyword is determined by the surrounding code block (the context) where the arrow function is defined.

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
