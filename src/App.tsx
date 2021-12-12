import React, {useEffect} from 'react';
import {observer} from "mobx-react";
import {Registration} from "./models/Registration/RegistrationComponent";
import {Box, makeStyles} from "@material-ui/core";
import permission from './stores/permissionStore/permissionStore'
import MainContainer from "./components/MainContainer/MainContainer";
import {BrowserRouter as Router} from 'react-router-dom'
import MainRoute from "./components/MainContainer/MainRoute";
const useStyles = makeStyles(() => ({
        container: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'blue'
        }
    }
))

const App = observer (() => {
    const classes = useStyles();
    const {isAuth} = permission

    if (!isAuth) {
        return <Registration />
    }
    return (
        <Router>
            <MainRoute />
            {/*<MainContainer />*/}
        </Router>
  );
})

export default App;
