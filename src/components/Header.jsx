import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import '../scss/home.scss';

const useStyles = makeStyles({
    title: {
        fontFamily:'Raleway, cursive',
        color:'#FFFFFF'
    }
})

function Header() {
    const classes = useStyles();
    return (
        <header>
            <Typography variant="h4" component="h1" className={classes.title}>
                ToDo App 
            </Typography>
        </header>
    );
}

export default Header;