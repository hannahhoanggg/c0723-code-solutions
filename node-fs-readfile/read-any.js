import { readFile } from 'node:fs/promises';

const filePath = process.argv[2];

async function readAny(filePath) {
  try {
    const data = await readFile(filePath, 'utf8');
    console.log(data);
  } catch (error) {
    console.log('error: ', error.message);
  }
}

readAny(filePath);
