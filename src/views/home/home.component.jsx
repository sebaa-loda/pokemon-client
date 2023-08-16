import "./home.styles.css";
import Cards from "../../components/cards/cards.component";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTypeFilter,
  getPokemons,
  getTypes,
  removeTypeFilter,
  setOrder,
  setOriginFilter,
} from "../../redux/actions";
import SearchBar from "../../components/searchBar/searchBar.component";

function Home() {
  const dispatch = useDispatch();
  const { types, typeFilter } = useSelector((state) => state);

  const handleChange = (type) => {
    if (!typeFilter.includes(type)) dispatch(addTypeFilter(type));
    else dispatch(removeTypeFilter(type));
  };

  const handleChangeOrigin = (event) => {
    dispatch(setOriginFilter(event.target.name));
  };

  const handleOrder = (event) => {
    dispatch(setOrder(event.target.name));
  };

  const checked = () => {

  }

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Home</h1>
      <SearchBar />
      <div className="filter-container">
        <div></div>
        <div className="types-container" key="filters">
          {types.length ? (
            types.map((type) => {
              return (
                <div key={type.id}>
                  <input
                    type="checkbox"
                    value={type.name}
                    onChange={() => handleChange(type.name)}
                    id={type.name}
                    checked={typeFilter.includes(type)}
                  />
                  <label htmlFor={type.name}>{type.name}</label>
                </div>
              );
            })
          ) : (
            <div>Loading</div>
          )}
        </div>
        <button onClick={handleChangeOrigin} name="all">
          All pokemons
        </button>
        <button onClick={handleChangeOrigin} name="api">
          Precreated pokemons{" "}
        </button>
        <button onClick={handleChangeOrigin} name="db">
          Pokemons created
        </button>
        <br />
        <br />
        <button onClick={handleOrder} name="asc">
          Ascending name
        </button>

        <button onClick={handleOrder} name="des">
          Descending name
        </button>

        <button onClick={handleOrder} name="lowerAttack">
          Ascending attack
        </button>

        <button onClick={handleOrder} name="higherAttack">
          Descending attack
        </button>
      </div>
      <Cards />
    </div>
  );
}

export default Home;
