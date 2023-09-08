import { readFile } from 'node:fs/promises';

const fileName = process.argv.slice(2);

async function catFiles(filePaths) {
  try {
    const promises = filePaths.map((filePath) => readFile(filePath, 'utf8'));
    const contents = await Promise.all(promises);
    console.log(contents.join('\n'));
  } catch (error) {
    console.log('error: ', error.message);
  }
}

catFiles(fileName);
