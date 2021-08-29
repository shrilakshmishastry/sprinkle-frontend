import React from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Main from './main';
import { getProfileInitialData } from './redux/actions/profileAction';
import { getProductListOfHome } from './redux/actions/topProductGetAction';




function App() {

  const dispatch  = useDispatch();
  React.useEffect(()=>{
    getProfileInitialData()(dispatch);
    getProductListOfHome()(dispatch);
  },[dispatch]);

  return (
    <main >
      <Main/>
    </main>
  );
}

export default App;
