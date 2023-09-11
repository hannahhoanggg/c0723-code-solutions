import { readFile, writeFile } from 'node:fs/promises';

const data = JSON.parse(await readFile('data.json'));
const notes = data.notes;

async function dataFile() {
  const stringify = JSON.stringify(data, null, 2);
  await writeFile('data.json', stringify);
}

async function readNotes() {
  for (const key in notes) {
    console.log(`${key}: ${notes[key]}`);
  }
}

async function addNotes() {
  const text = process.argv[3];
  data.notes[data.nextId] = text;
  data.nextId++;
  dataFile();
}

async function updateNotes() {
  const [id, newNote] = process.argv.slice(3);
  for (const key in notes) {
    if (key === id) {
      notes[key] = newNote;
    }
  }
  dataFile();
}

async function deleteNotes() {
  const id = process.argv[3];
  for (const key in notes) {
    if (key === id) {
      delete notes[key];
    }
  }
  dataFile();
}

try {
  process.argv[2] === 'read' && (await readNotes());
  process.argv[2] === 'create' && (await addNotes());
  process.argv[2] === 'update' && (await updateNotes());
  process.argv[2] === 'delete' && (await deleteNotes());
} catch (error) {
  console.log('error: ', error);
}
