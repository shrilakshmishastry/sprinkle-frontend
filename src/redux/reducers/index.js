import {combineReducers} from 'redux';
import CheckOut from './checkout';
import HomePage from './homePage';
import { modalDetailView, modalLogin, modalSignin } from './modalLogin';
import Products from './product';
import User from './user';

const rootReducer = combineReducers({
    homeReducer : HomePage,
    productsReducer: Products,
    userReducer : User,
    checkoutReducer : CheckOut,
    modalLoginReducer: modalLogin,
    modalSignInReducer: modalSignin,
    modalDetailViewReducer: modalDetailView
});
export default rootReducer;