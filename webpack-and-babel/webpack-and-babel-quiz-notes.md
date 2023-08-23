# webpack-and-babel-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Webpack?
  Webpack examines your code, starting at its entry point, & recursively scans the import statements to find all the modules your code uses. It builds dependency graph & analyzes it to find & remove code that is not in use. It renames functions, variables, classes to ensure there are no name conflicts.
- What is the advantage of using Webpack (or a similar bundler)?
  Some advantages of Webpack is that it breaks down code into modular components, it split codes, and it uses process of treeshaking (removes old code).
- What is Babel?
  Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current & older browsers.
  -It is designed to transpile newer versions of Javascript into older versions. It allows developers to write code using modern productivity enhancements & still run their code on older devices/systems.
- What is the advantage of using Babel (or a similar transpiler)?
  Some advantages of using Babel are that it is compatible with older browsers, early adoption of new features, and code consistency.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
