# array-filter-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- `Array.forEach`:
  - What does `Array.forEach` do?
    The forEach method of array executes a provided function once for each array element. It loops through elements of array without for loop. It calls a provided callback function once for each element in array in ascending-index order.
  - What should the callback function do?
    It logs elements (log each element or properties to console), perform calculations (perform calculations on each element), modify elements (modify elements in array), & filter elments.
  - What is `Array.forEach` useful for?
    It is useful for iterating for specific data of elements of an array by logging elements/modifying elements.
- `Array.map`:
  - What does `Array.map` do?
    The map method of array creates a new array populated with the results of calling a provided function on every element in the calling array.
  - What should the callback function return?
    The callback function returns a value that is added as a single element in the corresponding position of the new array.
  - What is `Array.map` useful for?
    It is useful when you want to transform the elements of an array & create a new array based on transformed values.
- `Array.filter`:
  - What does `Array.filter` do?
    The filter method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
  - What should the callback function return?
    The callback function should return a boolean value: truthy value to keep the element in the resulting array and falsy value to be excluded from new array.
  - What is `Array.filter` useful for?
    It is useful for when you want to selectively extract elements from an array based on specific condition.

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
