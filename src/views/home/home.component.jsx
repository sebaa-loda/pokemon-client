import "./home.styles.css";
import Cards from "../../components/cards/cards.component";

import { useDispatch, useSelector } from "react-redux";
import {
  addTypeFilter,
  removeTypeFilter,
  setOrder,
  setOriginFilter,
  setPage,
} from "../../redux/actions";
import SearchBar from "../../components/searchBar/searchBar.component";

function Home() {
  const dispatch = useDispatch();
  const { types, typeFilter } = useSelector((state) => state);

  const handleChange = (type) => {
    dispatch(setPage(0))
    if (!typeFilter.includes(type)) dispatch(addTypeFilter(type));
    else dispatch(removeTypeFilter(type));
    
  };

  const handleChangeOrigin = (event) => {
    dispatch(setOriginFilter(event.target.name));
    dispatch(setPage(0))
  };

  const handleOrder = (event) => {
    dispatch(setOrder(event.target.name))
    dispatch(setPage(0))
  };

  return (
    <div className="home">
      <h1>Home</h1>
      <SearchBar />
      <div className="filter-container">
        <div className="div-types-container">
          <div className="types-container" key="filters">
            {types.length ? (
              types.map((type) => {
                return (
                  <div key={type.id} className="div-container-types">
                    <input
                      type="checkbox"
                      value={type.name}
                      onChange={() => handleChange(type.name)}
                      id={type.name}
                      checked={typeFilter.includes(type.name)}
                    />
                    <label htmlFor={type.name}>{type.name}</label>
                  </div>
                );
              })
            ) : (
              <div>Loading</div>
            )}
          </div>
        </div>
        <div className="buttonFilters">
          <div className="filters">
            <button onClick={handleChangeOrigin} name="all">
              All pokemons
            </button>
            <button onClick={handleChangeOrigin} name="api">
              Precreated pokemons{" "}
            </button>
            <button onClick={handleChangeOrigin} name="db">
              Pokemons created
            </button>
          </div>
          <div className="orders">
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
        </div>
      </div>
      <Cards />
    </div>
  );
}

export default Home;
