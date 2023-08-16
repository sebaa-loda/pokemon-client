import {
  ADD_TYPE_FILTER,
  CLEAR,
  GET_POKEMONS,
  GET_POKEMON_BY_ID,
  GET_POKEMON_BY_NAME,
  GET_TYPES,
  POST_POKEMON,
  REMOVE_TYPE_FILTER,
  SET_ORIGIN_FILTER,
  SET_ORDER,
  SET_PAGE,
} from "./actionsTypes";

const initialState = {
  pokemons: [],
  pokemonDetail: {},
  types: [],
  typeFilter: [],
  allPokemons: "all",
  orderPokemons: "asc",
  page : 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case GET_POKEMON_BY_ID:
      return {
        ...state,
        pokemonDetail: action.payload,
      };
    case GET_POKEMON_BY_NAME:
      return {
        ...state,
        pokemons: action.payload,
      };
    case CLEAR:
      return {
        ...state,
        pokemonDetail: action.payload,
      };
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case ADD_TYPE_FILTER:
      return {
        ...state,
        typeFilter: [...state.typeFilter, action.payload],
      };
    case REMOVE_TYPE_FILTER:
      return {
        ...state,
        typeFilter: state.typeFilter.filter((type) => type !== action.payload),
      };
    case POST_POKEMON:
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload]
      };
    case SET_ORIGIN_FILTER:
      return {
        ...state,
        allPokemons: action.payload,
      };
    case SET_ORDER:
      return{
        ...state,
        orderPokemons: action.payload,
      }
    case SET_PAGE:
      return{
        ...state,
        page: action.payload,
      }
    default:
      return { ...state };
  }
};

export default reducer;
