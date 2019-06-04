import { createStore, combineReducers } from 'redux';
import catReducer from '../reducers/catReducer';

const rootReducer = combineReducers({
    cat : catReducer
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;