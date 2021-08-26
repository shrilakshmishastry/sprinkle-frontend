import React from 'react';
import NavBarSprinkle from './presentational/Navbar';
import Footer from './presentational/Footer';

import ScrollToTop from './config/scrollToTop';
import Routers from './Data/Routers/routers';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Login from './components/Login';
import { modalLogin } from './redux/actions/modalLogin';


const Main = () => {
  let show = useSelector(state=>state.modalLoginReducer.show);
  const dispatch = useDispatch();
  function handleModal() {
    modalLogin(false)(dispatch);
  }

  return (
    <div>
      <Modal
      size="lg"
       show={show}
       onHide={handleModal}>
        <Modal.Body>
          <Login/>
        </Modal.Body>
      </Modal>
      <ScrollToTop />
      <NavBarSprinkle />
      <Routers/>
      <Footer />
    </div>
  );
};
export default Main;
