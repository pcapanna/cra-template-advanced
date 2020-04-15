import React from "react";
import logo from '../../../resources/logo.svg';

const BasicScreen = ({title}) => {
    console.log("render BasicScreen");
    // const {ZToolbarButton, ZToolbar} = zwebAuthCommon.components;
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    );
};

export default BasicScreen;
