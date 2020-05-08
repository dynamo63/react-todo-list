import { createStore } from 'redux';
import taskReducer from './task/taskReducer';

const store = createStore(taskReducer);
store.subscribe(() => console.log(store.getState()))

export default store;