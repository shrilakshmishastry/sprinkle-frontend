import React from 'react';
import NavBarSprinkle from './presentational/Navbar';
import Footer from './presentational/Footer';

import ScrollToTop from './config/scrollToTop';
import Routers from './Data/Routers/routers';

const Main = () => {
  return (
    <div>
      <ScrollToTop />
      <NavBarSprinkle />
      <Routers/>
      <Footer />
    </div>
  );
};
export default Main;
