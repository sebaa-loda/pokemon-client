import {GET_POKEMONS,GET_POKEMON_BY_ID,GET_POKEMON_BY_NAME,POST_POKEMON,DETAIL_POKEMON} from "./actionsTypes"
import axios from "axios";
require("dotenv").config();
const { URL_POKEMONS, URL_TYPES } = process.env;

export const getPokemons = () => {
    const endPoint = URL_POKEMONS
    return async (dispatch) => {
        try {
            const {data} = await axios(endPoint)
            if(!data.length) throw Error ("no pokemon found")
            return dispatch({
                type : GET_POKEMONS,
                payload : data
            })
        } catch (error) {
            return error.message;
        }
    }
}