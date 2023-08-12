import "./cards.styles.css";
import Card from "../card/card.component";
import { useSelector } from "react-redux";

export default function Cards() {
  const { typeFilter, pokemons } = useSelector((state) => state);
  const filterType = (paramsTypes) => (pokemon) =>
    paramsTypes.length
      ? pokemon.types.some((pokeType) => paramsTypes.includes(pokeType.name))
      : pokemon;

  return (
    <div className="cards" >
      {pokemons ? (
        pokemons.length ? (
          pokemons.filter(filterType(typeFilter)).map((pokemon) => {
            return (
              <Card
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                types={pokemon.types}
                image={pokemon.image}
              />
            );
          })
        ) : (
          <div>Not pokemon found</div>
        )
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
