import './home.styles.css';
import Cards from "../../components/cards/cards.component" 
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, typesFilter} from "../../redux/actions";


function Home() {
  const dispatch = useDispatch();
  const {types,pokemons,typesFilter} = useSelector((state) => state);

  useEffect(() => {

    dispatch(getPokemons());

    
  },[dispatch]);
  return (
    <div className="App">
      <h1>Home</h1>
      <div className='filter-container'>
        <div></div>
        <div className='types-container'>
        {types.map((type)=> {
          return (
          <div>
            <input type="checkbox" value={type.name} key={type.name} id={type.name}/>
            <label htmlFor={type.name}>{type.name}</label>
          </div>
          )
        })}
        </div>
        <div></div>
      </div>
      <Cards pokemons={pokemons}/>
    </div>
  );
}

export default Home;
