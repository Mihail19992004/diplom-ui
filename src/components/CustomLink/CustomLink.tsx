import React, {FC} from 'react';
import {Link} from 'react-router-dom'
import {makeStyles} from "@material-ui/core";


interface CustomLinkProps {
    to: string
    style?: any
}

const useStyle = makeStyles(() => ({
    link: {
        textDecoration: 'none',
        color: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    }
}));


const CustomLink: FC<CustomLinkProps> = (props) => {
    const {children, to, style} = props
    const classes = useStyle()
    return (
        <Link style={style} to={to} className={classes.link}>
            {children}
        </Link>
    );
};

export default CustomLink;