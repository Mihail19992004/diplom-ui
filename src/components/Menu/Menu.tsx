import React from 'react';
import {Box, makeStyles, Typography} from "@material-ui/core";
import {RouteStore} from '../../stores/routeStore/routeStore'
import CustomLink from "../CustomLink/CustomLink";
import { useLocation } from "react-router-dom"
const useStyle = makeStyles((theme) => ({
    menuContainer: {
        width: '90%',
        margin: '20px 0',
        background: 'black',
        minHeight: theme.spacing(7),
        display: 'flex'
    },
    routeContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '10%',
        background: 'rgba(254, 254, 254, 0.66)',
        cursor: 'pointer',
        '&:hover': {
            background: 'white'
        }
    }

}));


const Menu = () => {
    const {pathname} = useLocation()
    console.log(pathname)
    const classes = useStyle()
    const {availableRoutes} = new RouteStore()

    return (
        <Box className={classes.menuContainer}>
            {
                availableRoutes.map(route => (
                    <Box style={{width: `calc(100% / ${availableRoutes.length})`,
                                background: pathname === route.path ? 'blue' : undefined}}
                         key={route.id} className={classes.routeContainer}>
                        <CustomLink
                            to={route.path}>
                                <Typography>
                                    {route.name}
                                </Typography>
                        </CustomLink>
                    </Box>
                ))
            }
        </Box>
        );
};

export default Menu;


