import express from 'express';

const app = express();

// const nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradeArray = [];
  for (const key in grades) {
    gradeArray.push(grades[key]);
  }
  res.json(gradeArray);
});

app.use(express.json());

// app.post('/api/grades', (req, res) => {
//   const newData = req.body;
//   })
