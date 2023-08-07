import {GET_POKEMONS,/* GET_POKEMON_BY_ID,GET_POKEMON_BY_NAME,POST_POKEMON */} from "./actionsTypes"

const initialState = {
    pokemons : [],
    pokemonDetail : {}
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_POKEMONS:
            return {
                ...state, 
                pokemons: action.payload
            }


        default: 
        return {...state}
    }
}

export default reducer;