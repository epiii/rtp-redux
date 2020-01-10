import { DETAIL_POKEMON } from "../actions/WildPokemonDetailAction" //Import the actions types constant we defined in our actions
let dataState = { pokemon: [] };

const WildPokemonDetailData = (state = dataState, action) => {
    switch (action.type) {
        case DETAIL_POKEMON:
            let { pokemon } = action.data;
            return { ...state, pokemon };

        default:
            return state;
    }
}
export default WildPokemonDetailData