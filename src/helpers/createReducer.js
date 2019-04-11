
const createReducer = (type, uniqueKey) => (state = null, action) => {
    const { payload } = action;

    switch (action.type) {
        case type:
            return payload;
        case `${type}_UPDATE`:
            return [];
        default:
            return state;
    }
}

export default createReducer;
