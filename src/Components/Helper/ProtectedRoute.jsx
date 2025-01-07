import React, { Children } from 'react'
import { UserContext } from '../../Contexts/userContext'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {

    const { isLogged } = React.useContext(UserContext);

    console.log(isLogged)

    if(isLogged === true) {
        return children;
    } else if(isLogged === false) {
        return <Navigate to="/login" />;
    } else {
        return <></>;
    }
}

export default ProtectedRoute
