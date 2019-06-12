import { createStore, combineReducers } from 'redux';
import catReducer from '../reducers/catReducer';
import mapReducer from '../reducers/mapReducer';

const rootReducer = combineReducers({
    cat : catReducer,
    map : mapReducer 
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;