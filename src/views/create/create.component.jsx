import { useDispatch } from 'react-redux';
import './create.styles.css';
import { createPokemon } from '../../redux/actions';

function Create() {
  const dispatch = useDispatch()
  const create = () =>{
    dispatch(createPokemon(/* name,image,healthPoints,attack,defense,speed,height,weight,types */))
  }

  return (
    <div className="form">
      <form>
        <div>
          <label htmlFor="name">Poke Name: </label>
          <input type="text" placeholder='Poke Name' name='name'/>
        </div>
        <div>
          <label htmlFor="HP">Health Points: </label>
          <input type="text" placeholder='Health Points' name='HP'/>
        </div>
        <div>
          <label htmlFor="AT">Attack: </label>
          <input type="text" placeholder='Attack Points' name='AT'/>
        </div>
        <div>
          <label htmlFor="DF">Defense: </label>
          <input type="text" placeholder='Defense Points' name='DF'/>
        </div>
        <div>
          <label htmlFor="SPD">Speed: </label>
          <input type="text" placeholder='Speed Points' name='SPD'/>
        </div>
        <div>
          <label htmlFor="HGT">Height: </label>
          <input type="text" placeholder='Poke Height' name='HGT'/>
        </div>
        <div>
          <label htmlFor="WGT">Weight: </label>
          <input type="text" placeholder='Poke Weight' name='WGT'/>
        </div>
        <div>
          <label htmlFor="TP">Types: </label>
          <input type="text" placeholder='Poke Types' name='TP'/>
        </div>
        <div>
          <label htmlFor="IMG">Image: </label>
          <input type="text" placeholder='Poke Image' name='IMG'/>
        </div>
        <button>Create Pokemon</button>
      </form>
    </div>
  );
}

export default Create;
