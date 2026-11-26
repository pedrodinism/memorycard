export async function getPokemons() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=12&offset=0",
    );
    const json = await response.json();
    const pokemons = await Promise.all(
      json.results.map(async (element) => {
        const response = await fetch(element.url);
        const pokemon = await response.json();
        return {
          id: pokemon.order,
          url: pokemon.sprites.other.dream_world.front_default,
        };
      }),
    );
    return pokemons;
  } catch (error) {
    console.error(error);
  }
}
