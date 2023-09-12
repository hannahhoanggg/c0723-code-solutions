import express from 'express';

const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradeArray = [];
  for (const key in grades) {
    gradeArray.push(grades[key]);
  }
  res.json(gradeArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const newData = req.body;
  grades[nextId] = newData;
  newData.id = nextId;
  res.status(201).send(grades[nextId]);
  nextId++;
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
