import {combineReducers} from 'redux';
import CheckOut from './checkout';
import HomePage from './homePage';
import Products from './product';
import User from './user';

const rootReducer = combineReducers({
    homeReducer : HomePage,
    productsReducer: Products,
    userReducer : User,
    checkoutReducer : CheckOut
});
export default rootReducer;