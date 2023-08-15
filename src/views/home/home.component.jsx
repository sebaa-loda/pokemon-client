import './home.styles.css';
import Cards from "../../components/cards/cards.component" 
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTypeFilter, getPokemons, getTypes, removeTypeFilter} from "../../redux/actions";
import SearchBar from '../../components/searchBar/searchBar.component';


function Home() {
  const dispatch = useDispatch();
  const {types,typeFilter} = useSelector((state) => state);

  const handleChange = (type) => {
    if(!typeFilter.includes(type)) dispatch(addTypeFilter(type))
    else dispatch(removeTypeFilter(type))
  }

  useEffect(() => {
    dispatch(getTypes())
    dispatch(getPokemons());
  
  },[dispatch]);


  return (
    <div className="App">
      <h1>Home</h1>
      <SearchBar/>
      <div className='filter-container'>
        <div></div>
        <div className='types-container' key="filters">
        {types.length ? types.map((type)=> {
          return (
          <div key={type.id}>
            <input type="checkbox" value={type.name} onChange={() => handleChange(type.name)} id={type.name}/>
            <label htmlFor={type.name}>{type.name}</label>
          </div>
          )
        }) : <div>Loading</div>
      }
        </div>
        
      </div>
      <Cards/>
    </div>
  );
}

export default Home;
