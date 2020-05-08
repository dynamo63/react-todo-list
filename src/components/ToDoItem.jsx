import React, { useState } from 'react';
import { makeStyles, Radio, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import '../scss/todoItem.scss';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root:{
        marginTop:'.5em',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center'
    },
    title:{
        fontFamily:'Balsamiq Sans',
        fontSize: '1.3em'
    }
});

function ToDoItem (props) {
    const classes = useStyles();
    const [value, setValue] = useState('');

    const handleChange = event => {
        setValue(event.target.value)
    }

    const colors = ['is-none','is-easy','is-important','is-urgent',];
    const { title, grade } = props
    return (
        <ListItem className={`${classes.root} ${colors[grade]}`}>
            <ListItemText primary={title} primaryTypographyProps={{ className:classes.title}} />
            <ListItemSecondaryAction>
                <Radio checked={value === 'completed'} name="isCompleted" onChange={handleChange} value="completed" inputProps={{ 'aria-label': 'isCompleted' }}/>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

ToDoItem.propTypes = {
    title: PropTypes.string.isRequired,
    grade: PropTypes.oneOf([0,1,2,3]).isRequired
}

export default ToDoItem;