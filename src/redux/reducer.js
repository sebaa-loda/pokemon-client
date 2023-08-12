import {CLEAR, FILTER_TYPES, GET_POKEMONS, GET_POKEMON_BY_ID, GET_POKEMON_BY_NAME, GET_TYPES, POST_POKEMON,/*GET_POKEMON_BY_NAME,POST_POKEMON */} from "./actionsTypes"

const initialState = {
    pokemons : [],
    pokemonDetail : {},
    types : [],

    
    typeFilter : [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_POKEMONS:
            return {
                ...state, 
                pokemons: action.payload
            }
        case GET_POKEMON_BY_ID:
            return{
                ...state,
                pokemonDetail: action.payload
            }
        case GET_POKEMON_BY_NAME:
            return{
                ...state, 
                pokemons: action.payload
            }
        case CLEAR: 
            return{
                ...state,
                pokemonDetail: action.payload
            }
        case GET_TYPES:
            return{
                ...state,
                types: action.payload
            }
        case FILTER_TYPES:
            return{
                ...state,
                typeFilter: action.payload
            }
        case POST_POKEMON:
            return{
                ...state,
                pokemons: action.payload
            }
        default: 
        return {...state}
    }
}

export default reducer;