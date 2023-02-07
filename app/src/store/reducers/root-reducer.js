import { combineReducers } from 'redux';
import { UserReducer } from './user-reducer';
import { ShoppingReducer } from './shopping-reducer';

export default combineReducers({
    userReducer: UserReducer,
    shoppingReducer: ShoppingReducer
})