import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import validateToken from '../../guard/service/validate.token.service';
const Home = () => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    // useEffect(() => {
    //     async function getLogged() {
    //         const result = await validateToken();
    //         if (!result) history.push('/login');
    //         setIsLoading(false);
    //     }
    //     getLogged();
    //     return (() => {
    //         console.log('clean up');
    //     })
    // }, []);
    // return (<div>
    //     {!isLoading ? (
    //         <h2>Home</h2>
    //     ) :
    //         (<h2>Loading...</h2>)
    //     }
    // </div>
    return (<h2>Home</h2>
    );
}

export default Home;