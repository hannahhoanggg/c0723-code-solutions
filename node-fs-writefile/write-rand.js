import { writeFile } from 'node:fs/promises';

async function writeRandomNumber() {
  try {
    const randomNumber = Math.random();
    await writeFile('random.txt', randomNumber + '\n');
  } catch (error) {
    console.log('error: ', error);
  }
}
writeRandomNumber();
