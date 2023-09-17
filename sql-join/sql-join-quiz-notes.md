# sql-join-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a foreign key?
  A foreign key is a database concept used in relational database management systems (RDBMS) to establish a relationship between 2 tables. It is a field or a set of fields in one table that is used to reference the primary key of another table. The reference creates a link between the 2 tables, allowing you to represent relationships between data in a structured manner.
- How do you join two SQL tables? (Provide at least two syntaxes.)
  SQL join clause is a way of combining data from 2 different database tables into one result set.
  -The first syntax is FROM first table JOIN second table using name column. from "products" join "supplies" using ("supperId");
  -The second syntax is JOIN "suppliers" on "products"."supplierId" = "suppliers"."supplier.Id"
- How do you temporarily rename columns or tables in a SQL statement?
  You can temporarily renanme columns/tables in SQL statements by using aliases aka the "as" keyword.
- How do you create a one-to-many relationship between two tables?
  You can create a one-to-many relationship between two tables by when a foreign key in one table pointing to a primary key in another table.
- How do you create a many-to-many relationship between two tables?
  You can create a many-to-many relationship between two tables by introducing a 3rd "join table" that contains a foreign key to one of the tables & another foreign key to the other table.

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
