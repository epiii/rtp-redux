import axios from 'axios';
export const LIST_POKEMONS_SUCCESS = 'LIST_POKEMONS_SUCCESS';
export const LIST_POKEMONS_ERROR = 'LIST_POKEMONS_ERROR';

export const LIST_POKEMONS_NEXT_ERROR = 'LIST_POKEMONS_NEXT_ERROR';
export const LIST_POKEMONS_NEXT_SUCCESS = 'LIST_POKEMONS_NEXT_SUCCESS';

export const LIST_POKEMONS_PREV_SUCCESS = 'LIST_POKEMONS_PREV_SUCCESS';
export const LIST_POKEMONS_PREV_ERROR = 'LIST_POKEMONS_PREV_ERROR';

// Get list - Pokemons
// export const listPokemons = (pokemons) => ({
//     type: LIST_POKEMONS,
//     data: { pokemons }
// });

export const listPokemons = () => dispatch => {
    // dispatch({ type: LIST_POKEMONS_LOADING });
    axios.get('https://pokeapi.co/api/v2/pokemon')
        // axios.get(urlx)
        .then(data => dispatch({
            type: LIST_POKEMONS_SUCCESS,
            data: data.data
        }))
        .catch(error => dispatch({
            type: LIST_POKEMONS_ERROR,
            error: error
        }))
}

export const listPokemonsNext = (urly) => dispatch => {
    axios.get(urly)
        .then(data => dispatch({
            type: LIST_POKEMONS_NEXT_SUCCESS,
            data: data.data
        }))
        .catch(error => dispatch({
            type: LIST_POKEMONS_NEXT_ERROR,
            error: error
        }))
}

export const listPokemonsPrev = (urly) => dispatch => {
    axios.get(urly)
        .then(data => dispatch({
            type: LIST_POKEMONS_PREV_SUCCESS,
            data: data.data
        }))
        .catch(error => dispatch({
            type: LIST_POKEMONS_PREV_ERROR,
            error: error
        }))
}

