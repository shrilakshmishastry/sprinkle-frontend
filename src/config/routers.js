import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Shop from "../components/Shop";
import About from '../components/About';
import Cart from '../components/Cart';
import Login from '../components/Login';
import SignUp from "../components/SignUp";
import PageNotFound from "../components/PageNotFound";
import UserProfile from '../components/UserProfile';
import DetailedView from '../components/DetailedItemView';
import BuyNow from '../components/BuyNow';

const Routers = () => {
    return (
        <Switch>
            <Route path="/place-order" component={BuyNow} exact />
            <Route path="/item-details" component={DetailedView} exact />
            <Route path="/user-profile" component={UserProfile} exact />
            <Route path="/signup" component={SignUp} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/cart" component={Cart} exact />
            <Route path="/about-us" component={About} exact />
            <Route path="/products" component={Shop} exact />
            <Route path="/" component={Home} exact />
            <Route path="*" component={PageNotFound} />
        </Switch>
    );
};

export default Routers;