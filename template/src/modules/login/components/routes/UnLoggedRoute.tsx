import React from 'react';
import {Route} from "react-router-dom";
import {useIsBootstrapped} from "../../../app";
import {useIsLogged} from "../../index";
import {Redirect} from 'react-router';

const UnLoggedRoute = (props) => {

    const bootstrapped = useIsBootstrapped();
    const authenticated = useIsLogged();

    if (!bootstrapped) {
        return null;
    }

    if (authenticated) {
        return <Redirect to="/home"/>;
    }

    return (<Route {...props}/>);
};

export default UnLoggedRoute;
