import React from 'react';
import {Route} from "react-router-dom";
import {useIsBootstrapped} from "../hooks";

const UnLoggedRoute = (props) => {

    const bootstrapped = useIsBootstrapped();
    // const authenticated = useIsLogged();

    if (!bootstrapped) {
        return null;
    }

    // if (authenticated) {
    //     return <Redirect to="/"/>;
    // }

    return (<Route {...props}/>);
};

export default UnLoggedRoute;
