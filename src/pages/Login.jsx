import React, { useContext } from 'react';
import TextInput from '../components/UI/TextInput';
import Unibutton from '../components/UI/UniButton';
import { AuthContext } from '../context';

const Login = () => {
    const {isAuth, setisAuth} = useContext(AuthContext);
    const login = (event) => {
      event.preventDefault();
      setisAuth(true);
      localStorage.setItem('auth', 'true' );
    }

    return (
        <div>
            <h1>Страница логина</h1>
            <form onSubmit={login}>
                <TextInput type='text' placeholder='Логин'/>
                <TextInput type='text' placeholder='Пароль'/>
                <Unibutton>Войти</Unibutton>
            </form>
        </div>
    );
}

export default Login;
