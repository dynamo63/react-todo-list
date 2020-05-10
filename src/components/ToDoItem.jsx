import React from 'react';
import { makeStyles, ListItem, ListItemSecondaryAction, ListItemText, Checkbox } from '@material-ui/core';
import '../scss/todoItem.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { finish } from '../redux';
import { truncateWords } from '../utils';

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
    const dispatch = useDispatch()
    const colors = ['is-none','is-easy','is-important','is-urgent',];
    const { title, grade, id } = props
    return (
        <ListItem className={`${classes.root} ${colors[grade]}`}>
            <ListItemText primary={truncateWords(title)} primaryTypographyProps={{ className:classes.title}} />
            <ListItemSecondaryAction>
                <Checkbox color="default" onChange={() => dispatch(finish(id))} inputProps={{ 'aria-label': 'isCompleted' }} />
            </ListItemSecondaryAction>
        </ListItem>
    );
}

ToDoItem.propTypes = {
    title: PropTypes.string.isRequired,
    grade: PropTypes.oneOf([0,1,2,3]).isRequired,
    id: PropTypes.number.isRequired
}

export default ToDoItem;