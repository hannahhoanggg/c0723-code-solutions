import { writeFile } from 'node:fs/promises';

const note = process.argv[2];

async function noteToSelf() {
  try {
    await writeFile('note.txt', note + '\n');
  } catch (error) {
    console.log('error: ', error.message);
  }
}

noteToSelf();
