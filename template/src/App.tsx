import React, {useEffect} from 'react';
import './App.css';
import store from "./configuration/configureStore";
import {createGenerateClassName, StylesProvider, ThemeProvider} from "@material-ui/styles";
import {Provider} from "react-redux";
import muiTheme from "./configuration/createMaterialTheme";
import {actions as appActions, AppRouter} from "./modules/app";


const generateClassName = createGenerateClassName({
    disableGlobal: true,
    productionPrefix: "MYCV",
    seed: "MYCV"
});

function App() {

    useEffect(() => {
        store.dispatch(appActions.bootstrapRequest());
    });

    return (
        <div className="App">
            <Provider store={store}>
                <StylesProvider injectFirst={false} generateClassName={generateClassName}>
                    <ThemeProvider theme={muiTheme}>
                        {/*<MuiThemeProvider theme={muiTheme}>*/}
                        <AppRouter/>
                        {/*</MuiThemeProvider>*/}
                    </ThemeProvider>
                </StylesProvider>
            </Provider>
        </div>
    );
}

export default App;
