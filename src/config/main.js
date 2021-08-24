import React from 'react';
import NavBarSprinkle from '../presentational/Navbar';
import Footer from '../presentational/Footer';

import Routers from "./routers"

import ScrollToTop from './scrollToTop';

const Main = () => {
  return (
    <div>
      <ScrollToTop />
      <NavBarSprinkle />
      <Routers />
      <Footer />
    </div>
  );
};
export default Main;
