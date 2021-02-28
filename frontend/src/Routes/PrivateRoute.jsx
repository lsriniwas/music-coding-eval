import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect,Route } from 'react-router-dom';

function PrivateRoute({Component,...rest}) {
    const isAuth=useSelector(state=>state.login.isAuth)
    const token = localStorage.getItem('token')
    console.log("hello")
    return (
                    
            isAuth ? <Route {...rest} render={()=><Component/>} />  : <Redirect to = "/" />

    );
}

export default PrivateRoute;