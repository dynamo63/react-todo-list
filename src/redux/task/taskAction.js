import { COMPLETED } from "./taskTypes"

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