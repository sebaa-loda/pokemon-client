import "./cards.styles.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions";

function Cards() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, [pokemons]);

  return (
    <div className="App">
      <h1>cardsss</h1>
    </div>
  );
}

export default Cards;
