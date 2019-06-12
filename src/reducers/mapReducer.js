import { stageOne } from '../config/constants';

const initialState = {
    tiles: []
}

const mapReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'STAGE_ONE':
            return {tiles: stageOne}
        case "ADD_TILES":
            return {
                ...action.payload
            }
        default:
            return state
    }
}

export default mapReducer;