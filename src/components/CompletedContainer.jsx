import React from 'react';
import HeaderToDo from './Header';
import ListToDo from './ListToDo';
import { useSelector } from 'react-redux';

function CompletedContainer () {
    const taskListCompleted = useSelector(state => state.tasks.filter(task => task.completed === true))
    return (
        <>
            <HeaderToDo />
            <ListToDo isCompleted={true} data={taskListCompleted} />
        </>
    );
}

export default CompletedContainer;