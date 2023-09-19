import express from 'express';
import pg from 'pg';
import ClientError from './client-error.js';

const app = express();
app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `select * from "grades"`;
    const result = await db.query(sql);
    res.status(200).json(result.rows);
  } catch (error) {
    next(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, 'GradeID must be a positive integer');
    }
    const sql = `select *
                  from "grades"
                  where "gradeId" = $1
                  `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `Cannot find grade with "gradeId" ${gradeId}`);
    }
    res.status(200).json(grade);
  } catch (error) {
    next(error);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (!name || !course || isNaN(score) || score < 0 || score > 100) {
      res.status(400).json({ error: 'Invalid grade data' });
    } else {
      const postSql = `insert into "grades" ("name", "course", "score")
                    values ($1, $2, $3)
                    returning *`;
      const postParams = [name, course, score];
      const result = await db.query(postSql, postParams);
      const grade = result.rows[0];
      res.status(201).json(grade);
    }
  } catch (error) {
    next(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    const { gradeId } = req.params;
    if (!name || !course || isNaN(score) || score < 0 || score > 100) {
      res.status(400).json({ error: 'Invalid gradeId data' });
    } else {
      const updateSql = `update "grades"
                        set "name" = $1, "course" = $2, "score" = $3
                        where "gradeId" = $4
                        returning *`;
      const updateParams = [name, course, score, gradeId];
      const result = await db.query(updateSql, updateParams);
      const grade = result.rows[0];
      res.status(200).json(grade);
    }
  } catch (error) {
    next(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    const deleteSql = `delete from "grades"
                        where "gradeId" = $1
                        returning *`;
    const deleteParams = [gradeId];
    const result = await db.query(deleteSql, deleteParams);
    const grade = result.rows[0];
    res.sendStatus(204).json(grade);
  } catch (error) {
    next(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
