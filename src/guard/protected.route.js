import React, { useState, useEffect, Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import validateToken from './service/validate.token.service';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const [isLogged, setIsLogged] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function getLogged() {
            const result = await validateToken();
            setIsLogged(result);
            setIsLoading(false);
        }
        getLogged();
        return function() {
            console.log('clean up');
        };
    }, []);

    return (
        <Fragment>
            {!isLoading ? (<Route
            {...rest}
            render={props => {
                if (isLogged == true) {
                    return <Component {...props} />
                }
                else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    )
                }
            }}
        />) : 
        (<div>Is loading...</div>)
        }
        
        </Fragment>
    )
}