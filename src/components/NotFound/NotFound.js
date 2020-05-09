import React, { Fragment } from 'react';
import { useHistory } from "react-router-dom";

const NotFound = () => {
    const history = useHistory();

    const redirectTo = () => {
        history.push('/');
    }
    return (
        <Fragment>
            <h2>Not Found</h2>
            <button onClick={() =>redirectTo()}>Go to home</button>
        </Fragment>
    );
}

export default NotFound;