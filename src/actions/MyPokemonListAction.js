export const LIST_POKEMONS = 'LIST_POKEMONS';
export const ADD_POKEMON = 'ADD_POKEMON';
// export const UPDATE_POKEMON = 'UPDATE_POKEMON';
// export const DELETE_POKEMON = 'DELETE_POKEMON';

// Get Pokemons
export const listPokemons = (pokemons) => ({
    type: LIST_POKEMONS,
    data: {pokemons}
});

// Add Pokemon - CREATE (C)
export const addPokemon = (pokemon) => ({
    type: ADD_POKEMON,
    data: {pokemon}
});

// Update Pokemon - UPDATE (U)
// export const updatePokemon = (pokemon) => ({
//     type: UPDATE_POKEMON,
//     data: {pokemon}
// });

// Delete Pokemon - DELETE (D)
// export const deletePokemon = (id) => ({
//     type: DELETE_POKEMON,
//     data: {id}
// });