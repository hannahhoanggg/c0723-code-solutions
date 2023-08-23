# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
The logical AND (&&) operator is a set of boolean operands that will be true if & only if all operands are true and logical OR (||) operator is a set of boolean operands is true if & only if one or more operands is true.
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
"Short-circuit evaluation" is to optimize the evaluation of logical expressions involving boolean operators && and ||. It refers to the behavior where the evaluation of an expression stops as soon as the final result can be determined, without evaluating the entire expression.
-It applies to the && if a string evaluates to false, the entire expression is false regardless of the other values.
-It applies to the || if a string evaluates to true, the entire expression evaluates to true regardless of the other values.
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
The ?? operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null/undefined & returns its left-hand side operand.
It differs from || by checking for null values (null & undefined) whereas || checks for falsy values.
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
The ?: operator that takes 3 operands: a condition followed by a question mark, then an expression to execute if the condition is truthy followed by a colon, and the expression to execute if the condition is falsy. The ?: is an expression/statement while if-else is a block of code.
- What is the `?.` (optional chaining) operator? When would you use it?
The ?. operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.
-You would use it when dealing with nested object structures where any level of the hierarchy could be null/undefined.
- What is `...` (spread) syntax? How do you use it with arrays and objects?
The ... syntax allows an iterable(array/string) to be expanded in places where zero or more arguments or elements are expected. It expands elements of array/object into another array/objects.
- What data types can be spread into an array? Into an object?
You can spread arrays, strings and any iterable object(set/map) into an array.
You can spread objects or other objects with iterable properties into object as key-value pairs.
- How does spread syntax differ from rest syntax?
Spread syntax is the opposite of rest syntax. Spread syntax expands an array into elements while rest syntax collects multiple elements & condenses them into a single element.

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```js
const data = "Howdy"
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
  width:100%
}
```
