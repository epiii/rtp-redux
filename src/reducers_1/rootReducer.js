const initialState = {
    counter: 0
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'CATCH_POKEMON':
            return { counter: state.counter + 1 }
        case 'RENAME_POKEMON':
            return { counter: state.counter - 1 }
        default:
            return state;
    }
}