import React from 'react';
import { Card, CardContent,makeStyles, Typography, CardActions, Button } from '@material-ui/core';
import CircleIcon from '@material-ui/icons/FiberManualRecord';
import { truncateWords } from '../utils';
import PropTypes from 'prop-types';
import { important, none, urgent, easy } from '../scss/todoItem.scss';

const useStyles = makeStyles({
    root:{
        margin: '1em 0'
    },
    title:{
        fontWeight:'bold'
    },
    content:{
        color:'gray'
    }
})

function ToDoItemCompleted(props) {
    const classes = useStyles();
    const { title, description, grade } = props;
    const gradeColor = [none, easy, important, urgent];
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h3" className={classes.title}>
                <CircleIcon style={{ color: gradeColor[grade] }} /> {title}
                </Typography>
                <br/>
                <Typography variant="body1" component="p" className={classes.content}>
                    {truncateWords(description, 15)}
                </Typography>
            </CardContent>
            <CardActions>
                <Button component="a" href="#">Voir Plus</Button>
            </CardActions>
        </Card>
    );
}

ToDoItemCompleted.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    grade: PropTypes.oneOf([0,1,2,3]).isRequired
}

export default ToDoItemCompleted;