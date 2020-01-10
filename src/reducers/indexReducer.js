import { combineReducers } from 'redux';

// import MyPokemon from './MyPokemonListReducer'
import WildPokemonListReducer from './WildPokemonListReducer'
import WildPokemonDetailReducer from './WildPokemonDetailReducer'

// Combine all the reducers
const indexReducer = combineReducers({
    // MyPokemon,
    WildPokemonDetail: WildPokemonDetailReducer,
    WildPokemonList: WildPokemonListReducer,
});

export default indexReducer;
