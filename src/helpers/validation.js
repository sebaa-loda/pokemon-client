const validation = (pokemon) => {
  let errors = {};

  if (!pokemon.name) {
    errors.name = "The pokemon needs a name";
  } else if (!/^[a-z]+$/i.test(pokemon.name)) {
    errors.name = "Name must contain letters";
  } else if (pokemon.name.length > 12 || pokemon.name.length < 3) {
    errors.name = "The name must contain between 3 and 12 characters";
  }

  if (!pokemon.healthPoints || pokemon.healthPoints < 1) {
    errors.healthPoints = "Requires positive health points";
  }

  if (!pokemon.attack || pokemon.attack < 1) {
    errors.attack = "Requires positive hit points";
  }

  if (!pokemon.defense || pokemon.defense < 1) {
    errors.defense = "Requires positive defense points";
  }

  if (!pokemon.types.length) {
    errors.types = "requires at least 1 type";
  }

  if (!pokemon.image || pokemon.image.trim() === "") {
    errors.image = "Image is mandatory";
  } else if (!/^https?:\/\/[^\s/$.?#].[^\s]*$/.test(pokemon.image)) {
    errors.image = "The image must be a valid URL";
  }

  return errors;
};

export default validation;
