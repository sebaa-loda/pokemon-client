import { useDispatch, useSelector } from "react-redux";
import "./create.styles.css";
import { createPokemon } from "../../redux/actions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Create() {
  const types = useSelector((state) => state.types);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [typeSelect, setTypeSelect] = useState("")


  const [formPokemon, setFormPokemon] = useState({
    name: "",
    healthPoints: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
    image: "",
  });
  const handleDeleteType = (event) => {
    setFormPokemon({
      ...formPokemon,
      types: formPokemon.types.filter((type) => type !== event.target.value),
    });
  };

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setFormPokemon({ ...formPokemon, [property]: value });
  };

  const handleType = (event) => {
    if (!formPokemon.types.includes(event.target.value)) {
      setFormPokemon({
        ...formPokemon,
        types: [...formPokemon.types, event.target.value],
      });
    }
    setTypeSelect("")
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createPokemon(formPokemon));
    setFormPokemon({
      name: "",
      healthPoints: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      types: [],
      image: "",
    });
    navigate("/home");
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Poke Name:</label>
          <input
            type="text"
            placeholder="Poke Name"
            onChange={handleChange}
            name="name"
            value={formPokemon.name}
          />
        </div>
        <br />
        <div>
          <label htmlFor="healthPoints">Health Points:</label>
          <input
            type="number"
            placeholder="Health Points"
            onChange={handleChange}
            name="healthPoints"
            value={formPokemon.healthPoints}
          />
        </div>
        <br />
        <div>
          <label htmlFor="attack">Attack:</label>
          <input
            type="number"
            placeholder="Attack Points"
            onChange={handleChange}
            name="attack"
            value={formPokemon.attack}
          />
        </div>
        <br />
        <div>
          <label htmlFor="defense">Defense:</label>
          <input
            type="number"
            placeholder="Defense Points"
            onChange={handleChange}
            name="defense"
            value={formPokemon.defense}
          />
        </div>
        <br />
        <div>
          <label htmlFor="speed">Speed:</label>
          <input
            type="number"
            placeholder="Speed Points"
            onChange={handleChange}
            name="speed"
            value={formPokemon.speed}
          />
        </div>
        <br />
        <div>
          <label htmlFor="height">Height:</label>
          <input
            type="number"
            placeholder="Poke Height"
            onChange={handleChange}
            name="height"
            value={formPokemon.height}
          />
        </div>
        <br />
        <div>
          <label htmlFor="weight">Weight:</label>
          <input
            type="number"
            placeholder="Poke Weight"
            onChange={handleChange}
            name="weight"
            value={formPokemon.weight}
          />
        </div>
        <br />
        <div>
          Types:
          <select name="types" value={typeSelect} id="type" onChange={handleType}>
            <option value="" disabled>Select Types</option>
            {types.length ? (
              types.map((type) => {
                return (
                  <option value={type.name} key={type.id}>
                    {type.name}
                  </option>
                );
              })
            ) : (
              <>Loading</>
            )}
          </select>
          <div>
            {formPokemon.types.map((type) => {
              return (
                <button
                  type="button"
                  onClick={handleDeleteType}
                  value={type}
                  key={type}
                >
                  {type}{" "}
                  
                  X
                </button>
              );
            })}
          </div>
        </div>
        <br />
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="text"
            placeholder="Poke Image"
            onChange={handleChange}
            name="image"
            value={formPokemon.image}
          />
        </div>
        <br />
        <button type="submit">Create Pokemon</button>
      </form>
    </div>
  );
}

export default Create;
