# css-cascade-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the four components of "the Cascade".
  The four components of "the cascade" is source order, inheritance, specificity, & !important.
- What does the term "source order" mean with respect to CSS?
  The term "source order" in CSS means the order that your CSS rules are written in your stylesheet. The styling provided for an element last in your stylesheet is the styling that will ultimately take effect.
- How is it possible for the styles of an element to be applied to its children as well without an additional CSS rule?
  It is possible for the styles of an element to be applied to its children without an additional CSS rule due to the inheritance property because it gets the computed value of that property from its parent element.
- List the three selector types in order of increasing specificity.

1. Type selector and pseudo elements
2. Class selector, attritube selectors, and pseudo classes
3. ID selectors

- Why is using `!important` considered bad practice?
  Using the "!important" is considered bad practice because it overrides all other styles, regardless of their specificity and it is difficult to maintain and can cause unexpected behavior in the website.

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
