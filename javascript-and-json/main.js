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

console.log('typeof books: ', typeof books);
console.log('typeof JSON: ', JSON.stringify(books));

const student = '{"id": "5", "String Name": "Hannah"}';
console.log('typeof student: ', typeof student);

const jsonStudent = JSON.parse(student);
console.log('typeof jsonStudent: ', typeof jsonStudent);
