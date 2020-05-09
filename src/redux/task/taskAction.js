import { COMPLETED, ADD_TASK } from "./taskTypes"

/**
 * Returns an Action of Type Finish the task
 * @param {Number} id - id of the task
 */
export const finish = id => {
    return{
        type: COMPLETED,
        payload: id
    }
}

/**
 * Add a task to the datalist
 * @param {Object} task - task to add
 * @param {Number} task.id - id of task
 * @param {String} task.title - Title of the task
 * @param {Number} task.grade - Grade of the Task
 * @param {Boolean} [task.completed = false] - determine if task is finished
 */
export const addTask = task => {
    return {
        type: ADD_TASK,
        payload: task
    }
}