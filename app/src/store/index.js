import rootReducer from './reducers/root-reducer';
import thunk from 'redux-thunk';
// import { logger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };