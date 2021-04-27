let initialState = 0;
export const cartReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case 'ADD_CART':
            return state + 1;
        case 'CLEAR_CART':
            return 0;
        default: return state;
    }
}