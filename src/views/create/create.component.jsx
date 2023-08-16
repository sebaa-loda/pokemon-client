import { useDispatch, useSelector } from "react-redux";
import "./create.styles.css";
import { createPokemon } from "../../redux/actions";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import validation from "../../helpers/validation";

function Create() {
  const types = useSelector((state) => state.types);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [typeSelect, setTypeSelect] = useState("");
  const [errors, setErrors] = useState("");
  const [noCreate, setNoCreate] = useState(false)
  const [created, setCreated] = useState(false)

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
    setErrors(validation({ ...formPokemon, [property]: value }));
  };

  const handleType = (event) => {
    if (!formPokemon.types.includes(event.target.value)) {
      setFormPokemon({
        ...formPokemon,
        types: [...formPokemon.types, event.target.value],
      });
    }
    setTypeSelect("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleCreate = async () => {
    try {
      const response = await dispatch(createPokemon(formPokemon));
      if (response.payload) {
        setCreated(true)
        navigate("/home")
      }
    } catch (error) {
      setNoCreate(true)
      
    }
  };

  useEffect(() => {
    setErrors(validation({ ...formPokemon, types: [...formPokemon.types] }));
  }, [formPokemon.types]);

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
          <p className="p">{errors.name}</p>
        </div>
        <br />
        <div>
          <label htmlFor="healthPoints">Health Points:</label>
          <input
            type="text"
            placeholder="Health Points"
            onChange={handleChange}
            name="healthPoints"
            value={formPokemon.healthPoints}
          />
          <p className="p">{errors?.healthPoints}</p>
        </div>
        <br />
        <div>
          <label htmlFor="attack">Attack:</label>
          <input
            type="text"
            placeholder="Attack Points"
            onChange={handleChange}
            name="attack"
            value={formPokemon.attack}
          />
          <p className="p">{errors?.attack}</p>
        </div>
        <br />
        <div>
          <label htmlFor="defense">Defense:</label>
          <input
            type="text"
            placeholder="Defense Points"
            onChange={handleChange}
            name="defense"
            value={formPokemon.defense}
          />
          <p className="p">{errors?.defense}</p>
        </div>
        <br />
        <div>
          <label htmlFor="speed">Speed:</label>
          <input
            type="text"
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
            type="text"
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
            type="text"
            placeholder="Poke Weight"
            onChange={handleChange}
            name="weight"
            value={formPokemon.weight}
          />
        </div>
        <br />
        <div>
          Types:
          <select
            name="types"
            value={typeSelect}
            id="type"
            onChange={handleType}
          >
            <option value="" disabled>
              Select Types
            </option>
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
          <p className="p">{errors?.types}</p>
          <div>
            {formPokemon.types.map((type) => {
              return (
                <button
                  type="button"
                  onClick={handleDeleteType}
                  value={type}
                  key={type}
                >
                  {type} X
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
          <p className="p">{errors?.image}</p>
        </div>
        <br />
        <button
          className="buttonCreate"
          type="submit"
          onClick={handleCreate}
          disabled={
            errors.name ||
            errors.attack ||
            errors.defense ||
            errors.healthPoints ||
            errors.types ||
            errors.image
          }
        >
          Create Pokemon
        </button>
        <br />
        {created && <p>Creating Pokemon</p>}
        {noCreate && <p>Pokemon already exist</p>}
      </form>
    </div>
  );
}

export default Create;
