import "./detail.styles.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { clearDetail, getPokemonsById } from "../../redux/actions";

function Detail() {
  const { id } = useParams();
  const pokemon = useSelector((state) => state.pokemonDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonsById(id));
    return () => {dispatch(clearDetail())};
  }, [dispatch, id]);
  return (
    <div>
      <h2>Pokemon: {pokemon.name}</h2>
      <h3>Health Points: {pokemon.healthPoints}</h3>
      <h3>Attack: {pokemon.attack}</h3>
      <h3>Defense: {pokemon.defense}</h3>
      <h3>Speed: {pokemon.speed}</h3>
      <h3>Height: {pokemon.height}</h3>
      <h3>Weight: {pokemon.weight}</h3>
      <h3>Types: {pokemon?.types?.map((type) => type.name).join(" - ")}</h3>
      <img src={pokemon.image} alt={pokemon.name} />
    </div>
  );
}

export default Detail;
