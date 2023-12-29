// src/store/configureStore.js
import {legacy_createStore as createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
 // Import the 'thunk' middleware

import rootReducer from '../reducers'; // Make sure to adjust the path based on your project structure

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
