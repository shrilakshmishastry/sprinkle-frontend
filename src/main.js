import React from 'react';
import NavBarSprinkle from './presentational/Navbar';
import Footer from './presentational/Footer';
import './App.css';
import ScrollToTop from './config/scrollToTop';
import Routers from './Data/Routers/routers';
import { useDispatch, useSelector } from 'react-redux';
import Login from './components/Login';
import { modalDetailView, modalLogin, modalSignIn } from './redux/actions/modalLogin';
import SignUp from './components/SignUp';
import ModalHandler from './presentational/ModalHandler/modalHandler';
import { contentMain } from './Data/Main/content';
import DetailedView from './components/DetailedItemView';


const Main = () => {

  const show = useSelector(state=>state.modalLoginReducer.show);
  const signUpShow = useSelector(state=>state.modalSignInReducer.show);
  const detailViewShow = useSelector(state=>state.modalDetailViewReducer.show);
  const dispatch = useDispatch();



  function handleModal() {
    modalLogin(false)(dispatch);
  }

  function handleSignUpModal() {
    modalSignIn(false)(dispatch);
  }

  function handleDetailViewModal(){
    modalDetailView(false,{})(dispatch);
  }

  return (
    <div>
      {/* {
        contentMain.modals.map((value)=>{
          return(
            <ModalHandler
            key={value.name}
            component={value.component}
            onHide={`${value.handler}`}
              show={`${value.show}`}

            />
          );
        })
      } */}
      <ModalHandler
        component={<Login/>}
        onHide={handleModal}
        show={show}
      />
       <ModalHandler
        component={<SignUp/>}
        onHide={handleSignUpModal}
        show={signUpShow}
      />
       <ModalHandler
        component={
          <DetailedView />
        }
        onHide={handleDetailViewModal}
        show={detailViewShow}
      />
      <ScrollToTop />
      <NavBarSprinkle />
      <Routers/>
      <Footer />
    </div>
  );
};
export default Main;
