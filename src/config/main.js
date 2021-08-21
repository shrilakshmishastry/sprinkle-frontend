import React from 'react';
import NavBarSprinkle from '../presentational/Navbar';
import Footer from '../presentational/Footer';

import Routers from "./routers"

const Main = () => {
  return (
    <div>
    <NavBarSprinkle/>
    <Routers/>
   <Footer/>
    </div>
  );
};
export default Main;
