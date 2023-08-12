import "./nav.styles.css";
import { NavLink } from "react-router-dom";
import SearchBar from "../searchBar/searchBar.component";

export default function Nav() {
  return (
    <div className="App">
      <h1>searching pokemonardos</h1>
      
      <button>
        <NavLink to="/create">Create</NavLink>
      </button>
    </div>
  );
}
