import "./cards.styles.css";
import Card from "../card/card.component";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Cards() {
  const { typeFilter, pokemons, allPokemons, orderPokemons } = useSelector(
    (state) => state
  );

  const [page, setPage] = useState(0);
  const pokemonsPerPage = 12;
  const totalPages = Math.ceil(pokemons.length / pokemonsPerPage)
  const startPage = page * pokemonsPerPage
  const endPage = startPage + pokemonsPerPage
  
  const nextHandler = () => {
    setPage(page + 1)
  }

  const prevHandler = () => {
    setPage(page - 1)
  }
  
  const filterType = (paramsTypes) => (pokemon) =>
    paramsTypes.length
      ? pokemon.types.some((pokeType) => paramsTypes.includes(pokeType.name))
      : pokemon;

  const originFilter = {
    api: (pokemon) => typeof pokemon.id === "number",
    db: (pokemon) => typeof pokemon.id === "string",
    all: (pokemon) => pokemon,
  };

  const order = {
    asc: (a, b) => a.name.localeCompare(b.name),
    des: (a, b) => b.name.localeCompare(a.name),
    lowerAttack: (a, b) => a.attack - b.attack,
    higherAttack: (a, b) => b.attack - a.attack,
  };

  return (
    <div className="cards">
      {pokemons.length ? (
          pokemons
            .filter(filterType(typeFilter))
            .filter(originFilter[allPokemons])
            .sort(order[orderPokemons])
            .slice(startPage,endPage)
            .map((pokemon) => {
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
          <div>Loading</div>
        )
}
      <button onClick={prevHandler} disabled={page < 1}>Prev Page</button>
      <h3>Page: {page + 1 }</h3>
      <button onClick={nextHandler} disabled={page === totalPages - 1}>Next Page</button>
    </div>
  );
}
