import React from 'react';
import {Route, Routes} from "react-router-dom";
import Breakfast from "../Breackfast/Breakfast";
import Sales from "../Sales/Sales";
import {RouteStore} from '../../stores/routeStore/routeStore'
import {Box, makeStyles} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    categoryContent: {
        minHeight: theme.spacing(50),
        background: 'white',
        width: '90%'
    }
}))


const CategoryContent = () => {

    const {availableRoutes} = new RouteStore()
    const classes = useStyle()
    console.log(availableRoutes)
    return (
        <Box className={classes.categoryContent}>
            <Routes>
                    {
                        availableRoutes.map(route => (
                            <Route path={route.path} element={route.component()} />
                        ))
                    }

            </Routes>
        </Box>

    );
};

export default CategoryContent;