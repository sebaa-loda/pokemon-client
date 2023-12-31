import { useDispatch } from "react-redux";
import { getPokemonsByName } from "../../redux/actions";
import { useEffect, useState } from "react";
import './searchBar.styles.css';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchPokemon, setSearchPokemon] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const handleChange = (value) => {
    setDebouncedSearch(value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchPokemon(debouncedSearch);
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [debouncedSearch]);

  useEffect(() => {
    if(searchPokemon !== "") dispatch(getPokemonsByName(searchPokemon))
    else dispatch(getPokemonsByName(""))
  }, [dispatch, searchPokemon]);

  return (
    <div className="search">
      <input
        type="text"
        className="input-search"
        placeholder="Search pokemon by name"
        value={debouncedSearch}
        onChange={(event) => {
          handleChange(event.target.value);
        }}
      />
    </div>
  );
}
