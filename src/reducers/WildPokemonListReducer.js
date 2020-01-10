import {
    LIST_POKEMONS_SUCCESS,
    LIST_POKEMONS_ERROR,

    LIST_POKEMONS_NEXT_SUCCESS,
    LIST_POKEMONS_NEXT_ERROR,

    LIST_POKEMONS_PREV_SUCCESS,
    LIST_POKEMONS_PREV_ERROR,
} from "../actions/WildPokemonListAction" //Import the actions types constant we defined in our actions
// let initialState = { pokemons: [] };
const initialState = {
    data: [],
    loading: false,
    error: ''
};

const WildPokemonListReducer = (state = initialState, action) => {
    switch (action.type) {

        case LIST_POKEMONS_SUCCESS:
            // let { pokemons } = action.data;

            return {
                ...state,
                loading: false,
                data: action.data,
                // pokemons
            };

        case LIST_POKEMONS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        case LIST_POKEMONS_NEXT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: action.data
            };

        case LIST_POKEMONS_NEXT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        case LIST_POKEMONS_PREV_SUCCESS:
            return {
                ...state,
                loading: false,
                error: action.data
            };

        case LIST_POKEMONS_PREV_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };



        default:
            return state;
    }
}
export default WildPokemonListReducer