import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import styles from './Login.module.css';
import { UserContext } from '../../Contexts/userContext';
import NotFound from '../Helper/NotFound/NotFound';

const Login = () => {

  const { isLogged } = React.useContext(UserContext)
  if(isLogged) {
    return <Navigate to='/conta' />
  }

  return (
    <div>
      
      <div className={styles.login}>
        <div className={styles.forms}>
          <Routes>
            <Route path='/' element={<LoginForm />}></Route>
            <Route path='criar' element={<LoginCreate />}></Route>
            <Route path='perdeu' element={<LoginPasswordLost />}></Route>
            <Route path='resetar' element={<LoginPasswordReset />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
      
    </div>
  )
}

export default Login
