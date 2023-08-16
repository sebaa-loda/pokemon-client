import "./cards.styles.css";
import Card from "../card/card.component";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/actions";

export default function Cards() {
  const dispatch = useDispatch();
  const { typeFilter, pokemons, allPokemons, orderPokemons, page } = useSelector((state) => state);
  const pokemonsPerPage = 12;
  const startPage = page * pokemonsPerPage;
  const endPage = startPage + pokemonsPerPage;

  const nextHandler = () => {
    dispatch(setPage(page + 1));
  };

  const prevHandler = () => {
    dispatch(setPage(page - 1));
  };

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

  const pokemonsFilters = pokemons.filter(filterType(typeFilter))
  .filter(originFilter[allPokemons])

  const totalPages = Math.ceil(pokemonsFilters.length / pokemonsPerPage);

  return (
    <div>
      <div className="cards">
        {pokemons ? (
          pokemonsFilters.length ? (
            pokemonsFilters
              .sort(order[orderPokemons])
              .slice(startPage, endPage)
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
        ) : (
          <div>Pokemon not found</div>
        )}
      </div>
      <div className="buttonPage">
        <button onClick={prevHandler} disabled={page < 1}>
          Prev Page
        </button>
        <h3>Page: {page + 1}</h3>
        <button onClick={nextHandler} disabled={page === totalPages - 1}>
          Next Page
        </button>
      </div>
    </div>
  );
}
