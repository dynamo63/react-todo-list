import React from 'react';
import { Typography, makeStyles, List } from '@material-ui/core';
import ToDoItem from './ToDoItem';
import '../scss/home.scss';

const useStyles = makeStyles({
    title:{
        fontFamily:'Raleway, cursive',
        color:'#FFFFFF'
    },
    list:{
        margin: '1em auto',
        width:'90vw'
    }
})

function Home() {

    const classes = useStyles()
    return (
        <>
            <header>
                <Typography variant="h4" component="h1" className={classes.title}>
                    ToDo App 
                </Typography>
            </header>
            <List className={classes.list}>
                <ToDoItem title="My Fist Task" grade={0} />
                <ToDoItem title="Second" grade={2} />
            </List>
        </>
    );
}

export default Home;