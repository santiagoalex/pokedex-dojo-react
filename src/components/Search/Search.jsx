import searchPokemon from "../../utils/searchPokemon";

// eslint-disable-next-line react/prop-types
const Search = ({ pokemon, setPokemon, setInfoPokemon }) => {
  const handleChange = (event) => {
    setPokemon(Number(event.target.value));
    console.log("ejecuto target", Number(event.target.value));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("ejecuta pokemon");
      searchPokemon(Number(pokemon))
        .then((pokemonData) => {
          console.log(pokemonData);
          setPokemon(Number(pokemonData.id));
          setInfoPokemon(pokemonData);
        })
        .catch((error) => {
          console.error("Error al buscar el Pokémon:", error);
        });
    }
  };

  return (
    <div className="input_container">
      <input
        type="text"
        className="input_search"
        onKeyDown={handleKeyDown}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Search;
