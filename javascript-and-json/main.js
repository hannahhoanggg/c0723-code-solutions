const books = [
  {
    isbn: '0-670-81302-8',
    title: 'It',
    author: 'Stephen King',
  },
  {
    isbn: '9781250286932',
    title: 'The Exhibitionist: A Novel',
    author: 'Charlotte Mendelson',
  },
  {
    ibsn: '9781368100304',
    title:
      "Tim Burton's The Nightmare Before Christmas (B&N Exclusive Edition)",
    author: 'Megan Shepherd',
  },
];

console.log('books: ', books);
console.log('typeof books: ', typeof books);

const booksJSON = JSON.stringify(books);
console.log('booksJSON: ', booksJSON);
console.log('typeof booksJSON: ', typeof booksJSON);

const studentJSON = '{"id": 5, "String Name": "Hannah"}';
console.log('studentJSON: ', studentJSON);
console.log('typeof studentJSON: ', typeof studentJSON);

const student = JSON.parse(studentJSON);
console.log('typeof student: ', typeof student);
