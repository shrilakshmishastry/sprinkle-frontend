import React from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { initialTopProductLoad } from './config/initialDataLoad/initialTopProductLoad';
import { initilaDataLoad } from './config/initialDataLoad/initialUserDataLoad';
import Main from './config/main';



function App() {

  const dispatch  = useDispatch();
  React.useEffect(()=>{

    // initilaDataLoad(dispatch);
    initialTopProductLoad(dispatch);
  },[dispatch]);

  return (
    <main >
      <Main/>
    </main>
  );
}

export default App;
