import React from 'react';
import {Box, makeStyles, Typography, ButtonGroup} from "@material-ui/core";
import Logo from '../../assets/img/logo.png'
import {CarouselSlider} from "../Carousel/Carousel";
import CustomButton from "../Button/CustomButton";
import permissionStore from "../../stores/permissionStore/permissionStore";
import PersonIcon from '@mui/icons-material/Person';
import Menu from "../Menu/Menu";
import CustomLink from "../CustomLink/CustomLink";
import CategoryContent from "../CategoryContent/CategoryContent";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const useStyle = makeStyles((theme) => ({
    mainContainer: {
        width: '100%',
        minHeight: '100vh',
        background: 'rgba(255, 189, 128, 1)',
        display: 'flex',
        justifyContent: 'center'
    },
    rootContainer: {
        minWidth: theme.spacing(170),
        background: 'white',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center'
    },
    headerContainer: {
        width: '90%',
        margin: '10px',
        background: "wheat",
        display: 'flex',
        justifyContent: 'space-between',
        minHeight: theme.spacing(7),
        alignItems: 'center',
        maxHeight: theme.spacing(5)
    },
    carouselContainer: {
        width: '90%',
        background: 'wheat',
        minHeight: theme.spacing(20)
    },
    buttonContainer: {
        height: theme.spacing(3)
    },
    logoContainer: {
        width: theme.spacing(30),
        maxHeight: theme.spacing(7)
    }
}))

const MainContainer = () => {
    const classes = useStyle()
    const {permissionRole} = permissionStore
    return (
        <Box className={classes.mainContainer}>
            <Box className={classes.rootContainer}>
                <Box className={classes.headerContainer}>
                    <img className={classes.logoContainer} src={Logo} alt=""/>
                    <ButtonGroup>
                        <CustomButton
                            style={{ height: 50, width: 15, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            isLoading={false}
                            content={
                                <CustomLink to="/auth">
                                    <PersonIcon />
                                </CustomLink>
                            }
                            isDisabled={false}
                            variant={"contained"}
                        />
                        {
                            permissionRole === 'admin'
                                && <CustomButton
                                    isLoading={false}
                                    content={
                                        <CustomLink to='/admin'>
                                            <Typography variant={"button"}>
                                                Administration
                                            </Typography>
                                        </CustomLink>
                                    }
                                    isDisabled={false}
                                    variant={'contained'}
                        />
                        }
                    </ButtonGroup>
                </Box>
                <Box className={classes.carouselContainer}>
                    <CarouselSlider />
                </Box>
                <Menu />
                <CategoryContent />
            </Box>
        </Box>
    );
};

export default MainContainer;