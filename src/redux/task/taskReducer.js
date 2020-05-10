import { COMPLETED, ADD_TASK } from "./taskTypes";

const initialState = {
    tasks:[
        {id:1, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, unde!",title: "My First Task", grade: 1,completed: false},
        {id:2, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, unde!",title: "My Second Task", grade: 2,completed: false},
        {id:3, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, unde!",title: "My Third Task", grade: 3,completed: false},
        {id:4, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, unde!",title: "Lorem ipsum dolor, sit amet consectetur adipisicing", grade: 0,completed: false}
    ]
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMPLETED:{
            const tasks = state.tasks;
            const item = tasks.findIndex(item => item.id === action.payload)
            tasks[item].completed = true

            return {
                ...state,
                tasks
            }

        }
        case ADD_TASK:{
            const tasks = state.tasks;
            tasks.push(action.payload)
            return {
                ...state,
            tasks
            }
        }
    
        default: return state;
    }
}

export default taskReducer;