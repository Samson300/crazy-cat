const initialState = {
    position: [0,0],
    spriteLocation: 'center top left'
}

const catReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'MOVE_CAT':
            return {
                ...action.payload
            }
        default:
            return state
    }
}

export default catReducer;