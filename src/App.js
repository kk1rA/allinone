import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/UI/Navbar/Navbar';
import { AuthContext } from './context';
import Approuter from './router/AppRouter';
import { useState } from 'react';

function App() {
  const [isAuth, setisAuth] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setisAuth(true); 
    }
    setisLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{isAuth, setisAuth, isLoading}}>
      <BrowserRouter>
        <Navbar/>
        <Approuter/>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
