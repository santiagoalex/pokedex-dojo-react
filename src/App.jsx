import { useState } from "react";
import Search from "./components/Search/Search";
import Name from "./components/Name/Name";
import ButtonPrev from "./components/Button/ButtonPrev";
import ButtonNext from "./components/Button/ButtonNext";
import Image from "./components/Image/Image";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState(1);
  const [infoPokemon, setInfoPokemon] = useState(null);
  return (
    <>
      <main>
        {infoPokemon?.sprites?.front_default && (
          <Image
            image={infoPokemon.sprites.front_default}
            name={pokemon.name}
          />
        )}

        <div className="pokemon_data">
          <Name name={infoPokemon?.name}></Name>
        </div>
        <Search
          pokemon={pokemon}
          setPokemon={setPokemon}
          setInfoPokemon={setInfoPokemon}
        />
        <div className="buttons">
          <ButtonPrev
            className="button btn-prev"
            pokemon={pokemon}
            setPokemon={setPokemon}
            setInfoPokemon={setInfoPokemon}
            textButton="Anterior"
          />
          <ButtonNext
            className="button btn-next"
            pokemon={pokemon}
            setPokemon={setPokemon}
            setInfoPokemon={setInfoPokemon}
            textButton="Siguiente"
          />
        </div>
        <img
          src="https://pokedex-conrado.vercel.app/images/pokedex.png"
          alt="pokedex"
          className="pokedex"
        ></img>
      </main>
    </>
  );
}

export default App;
