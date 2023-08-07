import './nav.styles.css';
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="App">
      <h1>searching pokemonardos</h1>
      <button><NavLink to="/home">Enter</NavLink></button>
      <button><NavLink to="/create">Create</NavLink></button>
      <button><NavLink to="/detail">Detail</NavLink></button>
    </div>
  );
}

export default Nav;
