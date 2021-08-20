import React from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Main from './config/main';
import { getProfileInitialData } from './redux/actions/profileAction';


function App() {

  const dispatch  = useDispatch();
  React.useEffect(()=>{
    getProfileInitialData(dispatch);
  },[dispatch]);

  return (
    <main >
      <Main/>
    </main>
  );
}

export default App;
