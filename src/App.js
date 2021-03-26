import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Header from './Header'
import { auth } from './firebase';
import Home from './Home';
import Login from './Login';

function App() {
const user = useSelector(selectUser);

const dispatch = useDispatch();



useEffect(() => {
  auth.onAuthStateChanged(userAuth => {
    if(userAuth) {
      // user is logged in
      dispatch(login({
        email: userAuth.email,
        uid: userAuth.uid,
        displayName: userAuth.displayName,
        photoUrl: userAuth.photoURL,
      }))
    } else {
      // user is logged out
      dispatch(logout());
    }
  });
}, []);
  return (
    <div className="App">
      {!user ? ( 
        <Login />
      ) : (
     <div className="app__body">
        <Header />
        <Home />
      </div>
       )}

    </div>
  );
}

export default App;
