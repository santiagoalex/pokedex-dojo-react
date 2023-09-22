/* eslint-disable react/prop-types */
import searchPokemon from "../../utils/searchPokemon";

const ButtonPrev = ({ setInfoPokemon, pokemon, setPokemon, textButton }) => {
  const handleButton = () => {
    searchPokemon(Number(pokemon) - 1)
      .then((pokemonData) => {
        setPokemon(Number(pokemon) - 1);
        setInfoPokemon(pokemonData);
      })
      .catch((error) => {
        console.error("Error al buscar el Pokémon:", error);
      });
  };

  return <button onClick={handleButton}>{textButton}</button>;
};

export default ButtonPrev;
