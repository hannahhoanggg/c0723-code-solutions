async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  console.log(users);
}
fetchData();

async function getPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/39');
    if (!response.ok)
      throw new Error(`Error: , status code: ${response.status}`);
    const pokemon = await response.json();
    console.log(pokemon);
  } catch (error) {
    console.log(`Error retrieving data, status code `, error.message);
  }
}
getPokemon();
