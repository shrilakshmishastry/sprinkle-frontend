import React from 'react';
import NavBarSprinkle from './presentational/Navbar';
import Footer from './presentational/Footer';
import './App.css';
import ScrollToTop from './config/scrollToTop';
import Routers from './Data/Routers/routers';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Login from './components/Login';
import { modalLogin, modalSignIn } from './redux/actions/modalLogin';
import SignUp from './components/SignUp';


const Main = () => {

  let show = useSelector(state=>state.modalLoginReducer.show);
  let signUpShow = useSelector(state=>state.modalSignInReducer.show);
  const dispatch = useDispatch();


  function handleModal() {
    modalLogin(false)(dispatch);
  }

  function handleSignUpModal() {
    modalSignIn(false)(dispatch);
  }

  return (
    <div>
      <Modal size="lg"   show={show}
       onHide={handleModal}>
        <Modal.Body className="p-0">
          <Login/>
        </Modal.Body>
      </Modal>
      <Modal size="lg"   show={signUpShow}
       onHide={handleSignUpModal}>
        <Modal.Body className="p-0">
          <SignUp/>
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
