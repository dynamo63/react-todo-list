import React, { useState } from 'react'
import { makeStyles, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home'
import NoteAddIcon from '@material-ui/icons/NoteAdd'
import DoneAllIcon from '@material-ui/icons/DoneAll'
import { Link, withRouter } from 'react-router-dom';

const useStyles = makeStyles({
    root:{
        position:'fixed',
        bottom: 0,
        width:'100vw',
        // height: '9vh',
        right: 0
    }
})

function NavBar () {
    const classes = useStyles()
    const [value, setValue] = useState('home')
    const handleChange = (_, newValue) => {
        setValue(newValue)
    }

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} component={Link} to="/"/>
            <BottomNavigationAction label="Add A Task" value="add" icon={<NoteAddIcon />} component={Link} to="/task/add"/>   
            <BottomNavigationAction label="Completed" value="completed" icon={<DoneAllIcon />} component={Link} to="/completed"/>   
        </BottomNavigation>
    );
}

export default withRouter(NavBar);