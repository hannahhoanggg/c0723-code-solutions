import { readFile, writeFile } from 'node:fs/promises';
import express from 'express';

const app = express();
app.use(express.json());

async function readData() {
  return JSON.parse(await readFile('data.json', 'utf8'));
}

async function writeData(data) {
  const stringify = JSON.stringify(data, null, 2);
  await writeFile('data.json', stringify);
}

app.get('/api/notes', async (req, res) => {
  try {
    const data = await readData();
    const notes = data.notes;
    const listNotes = [];
    for (const key in notes) {
      listNotes.push(notes[key]);
    }
    res.status(200).json(listNotes);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: 'An unexpected error occured' });
  }
});

app.get('/api/notes/:id', async (req, res) => {
  try {
    const { notes } = await readData();
    const notesId = Number(req.params.id);
    if (notesId < 0) {
      res.status(400).json({ error: 'Note ID must be a positive integer.' });
      return;
    }
    if (!notes[notesId]) {
      res.status(404).json({ error: `There is no note with that ${notesId}.` });
      return;
    }
    res.status(200).json(notes[notesId]);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: 'An unexpected error occured.' });
  }
});

app.post('/api/notes', async (req, res) => {
  try {
    const { content } = req.body;
    if (content === undefined) {
      res.status(400).json({ error: 'Content is a required field.' });
      return;
    }
    const data = await readData();
    const note = {
      id: data.nextId,
      content,
    };
    data.notes[note.id] = note;
    data.nextId++;
    await writeData(data);
    res.status(201).json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occured.' });
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  try {
    const notesId = Number(req.params.id);
    if (notesId < 0) {
      res.status(400).json({ error: 'Note ID must be a positive integer.' });
      return;
    }
    const data = await readData();
    if (data.notes[notesId] === undefined) {
      res.status(404).json({ error: `There is no note with that ${notesId}.` });
      return;
    }
    delete data.notes[notesId];
    await writeData(data);
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occured.' });
  }
});

app.put('/api/notes/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (id < 0) {
      res.status(400).json({ error: 'Note ID must be a positive integer.' });
      return;
    }
    const { content } = req.body;
    if (content === undefined) {
      res.status(400).json({ error: 'Content is a required field.' });
      return;
    }
    const data = await readData();
    if (data.notes[id] === undefined) {
      res.status(404).json({ error: `There is no note with that ${id}.` });
      return;
    }
    const note = { id, content };
    data.notes[note.id] = note;
    await writeData(data);
    res.json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occured.' });
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
