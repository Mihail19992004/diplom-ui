import React, {ReactElement} from 'react';
import CustomToggle from "../../components/toggleGroup/CustomToggle";
import { makeStyles, TextField, Typography} from "@material-ui/core";
import store from '../../stores/authStore/authStore'
import {observer} from "mobx-react";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {UnpackNestedValue, useForm} from "react-hook-form";
import CloseIcon from '@mui/icons-material/Close';
import CustomButton, {StyleButtonProps} from "../../components/Button/CustomButton";
import {Box} from "@mui/material";
import backgroundImage from '../../assets/img/restik_on_auth.jpg'

const useStyles = makeStyles((theme) => ({
    icon: {
        color: 'black',
        cursor: 'pointer',
            '&:hover': {
                color: 'blue'
            }
    },
    button: {
        width: theme.spacing(16),
        color: 'white'
    },
    form: {
        width: theme.spacing(60),
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgb(24%, 24%, 24%, 0.8)',

    },
    textField: {
        width: theme.spacing(40),
        '& .MuiInputLabel-root': {
            color: theme.palette.primary.contrastText,
            opacity: 0.7,
        },
        '& .MuiOutlinedInput-root': {
            color: theme.palette.primary.contrastText,
            '& fieldset': {
                borderRadius: 0,
                borderColor: 'white',
                opacity: 0.3,
            },
            '&:hover fieldset': {
                borderColor: '#666161',
                opacity: 1,
            },
            '&.Mui-focused fieldset': {
                opacity: 1,
            },
        },

        '& input': {
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: '#fff',
        },
    },
    toggle: {
        padding: theme.spacing(31),
        color: 'white'
    },
    background: {
        display: 'flex',
        backgroundImage: `url(${backgroundImage})`,
        width: '100vw',
        minHeight: '100vh'
    }

}));

const buttonStyle: Partial<StyleButtonProps> = {border: '1px solid white', color: 'white', width: 150}
const buttonDisableStyle: Partial<StyleButtonProps> = {border: '1px solid grey', color: 'grey', width: 150}

const toggleStyle = {color: "white"}
const toggleCustomStyle = {active: 'rgba(23, 16, 16, 0.8)', secondary: 'rgb(24%, 24%, 24%, 0.8)'}
const defaultValues = {username: '', password: ''}

export const AuthFormScheme = yup.object({
    username: yup.string().min(3, 'Минимальная длина имени пользователя 3 символа').required('Обязательное поле'),
    password: yup.string().min(3, 'Минимальная длина пароля 3 символа').required('Обязательное поле'),
})


export const Registration = observer ((): ReactElement => {
    const {activeToggleItem, setActiveItem, authMethod, toggleItems} = store
    const classes = useStyles();
    const form = useForm({
        mode: 'all',
        defaultValues,
        resolver: yupResolver(AuthFormScheme)
    });
    const {
        setValue,
        trigger,
        register,
        formState: { isValid, errors },
        handleSubmit,
    } = form;
    const onSubmitForm = (event: UnpackNestedValue<any>) => {

        activeToggleItem === 'Login' ?  store.authMethod.auth(event)
            .then(data => console.log(data))
            : store.authMethod.registration(event)
            .then(data => console.log(data));
    }
    const icon = (fieldName: 'username' | 'password'): JSX.Element => <CloseIcon
        className={classes.icon}
        onClick={() => {
            setValue(fieldName, defaultValues[fieldName])
            trigger(fieldName)
        }}/>
    return (
        <Box className={classes.background}>
            <form
                autoComplete="off"
                onSubmit={handleSubmit((data) => onSubmitForm(data))}
                className={classes.form}>
                <CustomToggle
                    style={toggleStyle}
                    elements={toggleItems}
                    toggleStyle={toggleCustomStyle}
                    setButton={setActiveItem}
                />
                <TextField
                    required {...register("username")}
                    autoComplete='off'
                    label="Имя пользователя"
                    variant="outlined"
                    error={!!errors.username}
                    helperText={
                        (<Typography style={{fontSize: 13}}>{errors?.username?.message}</Typography>)
                    }
                    className={classes.textField}
                    margin="normal"
                    InputProps={{
                        endAdornment: icon('username')
                    }}
                />

                <TextField
                    type='password'
                    required {...register("password")}
                    label="Пароль"
                    className={classes.textField}
                    error={!!errors.password}
                    helperText={
                        (<Typography style={{fontSize: 13}}>{errors?.password?.message}</Typography>)
                    }
                    variant="outlined"
                    margin="normal"
                    InputProps={{
                        endAdornment: icon('password')
                    }}
                />
                <CustomButton
                    isLoading={authMethod.loadingMethods.isLoading}
                    content={activeToggleItem}
                    isDisabled={!isValid}
                    variant={'outlined'}
                    type={'submit'}
                    style={buttonStyle}
                    disabledStyle={buttonDisableStyle}
                />

            </form
            >
        </Box>
    );
});