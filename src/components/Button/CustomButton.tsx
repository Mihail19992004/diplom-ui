import React, {FC} from 'react';
import {Button, CircularProgress} from "@mui/material";
import {makeStyles} from "@material-ui/core";

export interface StyleButtonProps {
    border: string
    color: string
    height: string | number
    width: string | number
    padding: string | number
    margin: string | number
    borderRadius: string | number
    alignItems: string
    display: string
    justifyContent: string
}

interface CustomButtonProps {
    isLoading: boolean
    content: string | React.ReactNode
    isDisabled: boolean
    variant:  "text" | "outlined" | "contained"
    type?: 'submit',
    style?: Partial<StyleButtonProps>
    disabledStyle?: Partial<StyleButtonProps>
}

const useStyles = makeStyles((theme) => ({
    button: {
        width: theme.spacing(16),
        background: 'white',
        '&:hover': {
            background: 'red'
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
}))

const CustomButton: FC<CustomButtonProps> = (props) => {
    const classes = useStyles()
    const {isLoading, content, isDisabled, type, variant, style, disabledStyle} = props

    if (isLoading) {
       return (
        <Button
            type={type}
            variant={variant}
            className={classes.button}
        >
            <CircularProgress />
        </Button>
       )
    }

    return (
        <Button
            style={isDisabled ? disabledStyle : style}
            disabled={isDisabled}
            type={type}
            className={classes.button}
            variant={variant}
        >
            {content}
        </Button>
 );
};

export default CustomButton;