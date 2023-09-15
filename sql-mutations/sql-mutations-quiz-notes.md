# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  The SQL CRUD operations are Create, Read, Update, & Delete.
- How do you add a row to a SQL table?
  To add a row to a SQL table, you use the "insert into" statement.
- How do you add multiple rows to a SQL table at once?
  To add multiple rows to a SQL table at once, you use the "insert into" statement with the "values" clause for each set of values you want to insert.
- How do you update rows in a database table?
  You update rows into a database table by using the "update" statement.
- How do you delete rows from a database table?
  You delete rows from a database table by using the "delete" statement.
- Why is it important to include a `where` clause in your `update` and `delete` statements?
  It is important to include a "where" clause because without it, the operation of "update" and "delete" would apply to all rows in the table when not intended to.
- How do you accidentally delete or update all rows in a table?
  You can accidentally delete or update all rows in a table by misplacing the "where" clause, human error, or misunderstanding SQL syntax.
- How do you get back the modified row without a separate `select` statement?
  In SQL, you can get back the modified row after performing an "update" operation by using the "returning" clause. It allows you to retrieve data of the affected rows in the same SQL statement without the need of a separate "select" statement.

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
