const searchPokemon = (pokemon) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
    method: "GET",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`No se pudo obtener el Pokémon: ${pokemon}`);
      }
      return res.json();
    })
    .then((jsonRes) => {
      return jsonRes;
    })
    .catch((error) => {
      console.error("Error al buscar el Pokémon:", error);
      throw error;
    });
};

export default searchPokemon;
