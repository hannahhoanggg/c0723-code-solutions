import { writeFile } from 'node:fs/promises';

async function writeRandomNumber() {
  try {
    const randomNumber = Math.random();
    const randomString = randomNumber.toString();
    await writeFile('random.txt', randomString + '\n');
  } catch (error) {
    console.log('error: ', error.message);
  }
}
writeRandomNumber();
