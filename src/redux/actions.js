import {
  CLEAR,
  FILTER_TYPES,
  GET_POKEMONS,
  GET_POKEMON_BY_ID,
  GET_POKEMON_BY_NAME,
  GET_TYPES /*GET_POKEMON_BY_NAME,POST_POKEMON */,
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
  const endPoint = `http://localhost:3001/pokemons/${name}`;
  return async (dispatch) => {
    try {
      const { data } = await axios(endPoint);
      if (!data) throw Error("no pokemon found");
      return dispatch({
        type: GET_POKEMON_BY_NAME,
        payload: data,
      });
    } catch (error) {
      return error.message;
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
  return async (dispatch) => {
    const { data } = await axios("http://localhost:3001/types");
    return dispatch({
      type: GET_TYPES,
      payload: data,
    });
  };
};

export const typesFilter = (type) => {
    return {
        type: FILTER_TYPES,
        payload: type,
    }
}
