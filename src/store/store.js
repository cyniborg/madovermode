import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import homeReducer from './../components/Home/homeReducer';
import currentProductId from './../components/DetailButton/detailsButtonReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    home: homeReducer,
    currentProductId
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;