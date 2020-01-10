export const DETAIL_POKEMON = 'DETAIL_POKEMON';

// Get detail - Pokemons
export const detailPokemon = (pokemon) => ({
    type: DETAIL_POKEMON,
    data: { pokemon }
});
