import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { isLogin } from '../Utilities';

function PrivateRoute({component: Component, ...rest}) {
    return (
       <Route 
        {...rest}
        render={(props)=>
        isLogin() ? <Component {...props} /> : <Redirect to={'/login'}/>
    }
       />
    );
}

export default PrivateRoute;