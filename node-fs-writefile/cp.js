import { writeFile, readFile } from 'node:fs/promises';

const sourceFile = process.argv[2];
const destinationFile = process.argv[3];

async function copyFile() {
  try {
    const fileContent = await readFile(sourceFile);
    await writeFile(destinationFile, fileContent);
  } catch (error) {
    console.log('error: ', error);
  }
}
copyFile();
