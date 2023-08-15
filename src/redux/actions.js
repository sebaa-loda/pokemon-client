import {
  ADD_TYPE_FILTER,
  CLEAR,
  GET_POKEMONS,
  GET_POKEMON_BY_ID,
  GET_POKEMON_BY_NAME,
  GET_TYPES,
  POST_POKEMON,
  REMOVE_TYPE_FILTER,
} from "./actionsTypes.js";
import axios from "axios";

export const getPokemons = () => {
  const endPoint = "http://localhost:3001/pokemons";
  return async (dispatch) => {
    try {
      const { data } = await axios(endPoint);
      if (!data.length) throw Error("no pokemon found");
      return dispatch({
        type: GET_POKEMONS,
        payload: data,
      });
    } catch (error) {
      return error.message;
    }
  };
};

export const getPokemonsById = (id) => {
  const endPoint = `http://localhost:3001/pokemons/${id}`;
  return async (dispatch) => {
    try {
      const { data } = await axios(endPoint);
      if (!data) throw Error("no pokemon found");
      return dispatch({
        type: GET_POKEMON_BY_ID,
        payload: data,
      });
    } catch (error) {
      return error.message;
    }
  };
};

export const getPokemonsByName = (name) => {
  const endPoint = `http://localhost:3001/pokemons?${name ? `name=${name}` : "name"}`;
  return async (dispatch) => {
    try {
      const { data } = await axios(endPoint);
      return dispatch({
        type: GET_POKEMON_BY_NAME,
        payload: data,
      });
    } catch (error) {
      return [];
    }
  };
};

export const clearDetail = () => {
  return {
    type: CLEAR,
    payload: {},
  };
};

export const getTypes = () => {
  const endPoint = "http://localhost:3001/types"
  return async (dispatch) => {
    const { data } = await axios(endPoint);
    return dispatch({
      type: GET_TYPES,
      payload: data,
    });
  };
};

export const addTypeFilter = (type) => {
  return {
    type: ADD_TYPE_FILTER,
    payload: type,
  }
}

export const removeTypeFilter = (type) => {
  return{
    type: REMOVE_TYPE_FILTER,
    payload: type,
  }
}

export const createPokemon = (formPokemon) => {
   const endPoint = "http://localhost:3001/pokemons/"
   return async (dispatch) => {
    const {data} = await axios.post(endPoint, formPokemon)
    return dispatch({
      type: POST_POKEMON,
      payload: data,
    })
   }
}
