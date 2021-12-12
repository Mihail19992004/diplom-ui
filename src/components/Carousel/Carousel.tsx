import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { makeStyles, Paper, Box, Typography} from "@material-ui/core";
import sliderStore from "../../stores/sliderStore/sliderStore";
import {observer} from "mobx-react";



const useStyle = makeStyles((theme) => ({
    slider: {
        // minHeight: theme.spacing(100),
        // padding: 20

    },
    imageSlider: {
        width: '100%',
        height: theme.spacing(80),
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
    },
    sliderContainer: {
        backgroundColor: 'rgba(41, 42, 41, 0.78)',
        width: '100%',
        height: '20%',
        padding: 20
    },
    headerSlider: {
        color: 'white'
    },
    descriptionSlider: {
        color: 'white',

    }
}))

export const CarouselSlider = observer( () => {
    const classes = useStyle()
    const {content} = sliderStore
    return (
        <Carousel indicators={false} fullHeightHover={true} className={classes.slider}>
            {
                content.map( (item, i) => (
                    <Box className={classes.imageSlider} style={{background: `url(${item.image})`, backgroundSize: '100%'}}>
                        <Box className={classes.sliderContainer}>
                            <Typography variant='h3' className={classes.headerSlider}>
                                {item.header}
                            </Typography >
                            <Typography className={classes.descriptionSlider} variant='body1'>
                                {item.description}
                            </Typography>
                        </Box>
                    </Box>

                ) )
            }
        </Carousel>

    );
});


