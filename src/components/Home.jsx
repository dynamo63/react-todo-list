import React from 'react';
import { useSelector } from 'react-redux';
import HeaderToDo from './Header';
import ListToDo from './ListToDo';
// import { withRouter } from 'react-router-dom';


function Home() {

    const taskList = useSelector(state => state.tasks.filter(task => task.completed === false));
    return (
        <>
            <HeaderToDo />
            <ListToDo isCompleted={false} data={taskList} />
        </>
    );
}

export default Home;