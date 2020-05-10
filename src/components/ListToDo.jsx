import React from 'react';
import { makeStyles, List } from '@material-ui/core';
import ToDoItemCompleted from './ToDoItemCompleted';
import ToDoItem from './ToDoItem';


const useStyles = makeStyles({
    list:{
        margin: '1em auto',
        width:'90vw'
    }
})

function ListToDo (props) {
    const { isCompleted, data } = props;
    const classes = useStyles();
    const taskList = !isCompleted ? data.map(
        task => <ToDoItem title={task.title} grade={task.grade} id={task.id} key={task.id} /> 
    ) : data.map(task => <ToDoItemCompleted title={task.title} grade={task.grade} description={task.description} key={task.id} />);

    return (
        <List className={classes.list}>
            { taskList }
        </List>
    );
}

export default ListToDo;