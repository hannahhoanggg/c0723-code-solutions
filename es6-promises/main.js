import takeAChance from './take-a-chance.js';

takeAChance('Hannah')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
  });
