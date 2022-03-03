import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/UI/Navbar/Navbar';
import { routes } from './router/router';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        {routes.map( route => 
          <Route element={route.component} path={route.path} exact={route.exact}/>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
