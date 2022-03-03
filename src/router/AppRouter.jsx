import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoaderComponent from '../components/UI/LoaderComponent';
import { AuthContext } from '../context';
import { privateRoutes, publicRoutes } from './router';

const Approuter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    if (isLoading) {
        return <LoaderComponent/> 
    }
    return (
        isAuth 
        ? <Routes>
            {privateRoutes.map( route => 
                <Route element={route.component} path={route.path} exact={route.exact} key={route.path}/>
            )}
            <Route path="*" element={<Navigate to="/posts"/>}/>
          </Routes>
        : <Routes>
            {publicRoutes.map( route => 
                <Route element={route.component} path={route.path} exact={route.exact}  key={route.path}/>
            )}
            <Route path="*" element={<Navigate to="/login"/>}/>
          </Routes>
    );
}

export default Approuter;
