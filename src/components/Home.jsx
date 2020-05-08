import React from 'react';
import { Typography, makeStyles, List } from '@material-ui/core';
import ToDoItem from './ToDoItem';
import '../scss/home.scss';
import { useSelector } from 'react-redux';

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
    const taskList = useSelector(state => state.tasks)
    return (
        <>
            <header>
                <Typography variant="h4" component="h1" className={classes.title}>
                    ToDo App 
                </Typography>
            </header>
            <List className={classes.list}>
                {taskList.map(task => <ToDoItem title={task.title} grade={task.grade} id={task.id} key={task.id} /> )}
            </List>
        </>
    );
}

export default Home;