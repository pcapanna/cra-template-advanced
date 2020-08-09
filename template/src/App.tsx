import React, {useEffect} from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import store from "./configuration/configureStore";
import {createGenerateClassName, StylesProvider, ThemeProvider} from "@material-ui/styles";
import {Provider} from "react-redux";
import muiTheme from "./configuration/createMaterialTheme";
import {actions as appActions, AppRouter} from "./modules/app";
import {ToastContainer} from "react-toastify";
import i18n from './configuration/i18n';

const generateClassName = createGenerateClassName({
    disableGlobal: true,
    productionPrefix: "MYCV",
    seed: "MYCV"
});

function App() {

    useEffect(() => {
        store.dispatch(appActions.bootstrapRequest());
    });

    const currentLanguage = i18n.language;

    return (
        <div className="App">
            <Provider store={store}>
                <StylesProvider injectFirst={false} generateClassName={generateClassName}>
                    <ThemeProvider theme={muiTheme}>
                        {/*<MuiThemeProvider theme={muiTheme}>*/}
                        <AppRouter/>
                        <ToastContainer/>
                        {/*</MuiThemeProvider>*/}
                    </ThemeProvider>
                </StylesProvider>
            </Provider>
        </div>
    );
}

export default App;
