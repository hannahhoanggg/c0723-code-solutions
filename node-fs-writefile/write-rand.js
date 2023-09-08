import { writeFile } from 'node:fs/promises';

async function writeRandomNumber() {
  try {
    const randomNumber = Math.random();
    const randomString = randomNumber.toString();
    const promise = writeFile('random.txt', randomString + '\n');
    await promise;
  } catch (error) {
    console.log('error: ', error.message);
  }
}
writeRandomNumber();
