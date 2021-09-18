import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "../../components/Home";
import Shop from "../../components/Shop";
import About from '../../components/About';
import Cart from '../../components/Cart';
import SignUp from "../../components/SignUp";
import PageNotFound from "../../components/PageNotFound";
import UserProfile from '../../components/UserProfile';
import BuyNow from '../../components/BuyNow';
import OrderSuccess from '../../presentational/OrderSuccess';
import OrderHistory from '../../components/OrderHistory';

const Routers = () => {
    return (
        <Switch>
            <Route path="/order-history" component={OrderHistory} exact />
            <Route path="/order-success" component={OrderSuccess} exact />
            <Route path="/place-order" component={BuyNow} exact />
            <Route path="/user-profile" component={UserProfile} exact />
            <Route path="/signup" component={SignUp} exact />
            <Route path="/cart" component={Cart} exact />
            <Route path="/about-us" component={About} exact />
            <Route path="/products" component={Shop} exact />
            <Route path="/" component={Home} exact />
            <Route path="*" component={PageNotFound} />
        </Switch>
    );
};

export default Routers;