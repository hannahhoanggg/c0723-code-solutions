import { writeFile, readFile } from 'node:fs/promises';

const sourceFile = process.argv[2];
const destinationFile = process.argv[3];

async function copyFile() {
  try {
    const fileContent = await readFile(sourceFile, 'utf8');
    await writeFile(destinationFile, fileContent + '\n');
  } catch (error) {
    console.log('error: ', error.message);
  }
}
copyFile();
