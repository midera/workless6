import {VISIBLE_FILTERS} from "../constants";

export const getTodosState = store => store.todos;

export const getTodoList = store =>
    getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store, id) =>
    getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};
export const getTodos = store =>
    getTodoList(store).map(id => getTodoById(store, id));

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
    const allTodos = getTodos(store);
    switch (visibilityFilter) {
        case VISIBLE_FILTERS.COMPLETED:
            return allTodos.filter(todo => todo.completed);
        case VISIBLE_FILTERS.INCOMPLETED:
            return allTodos.filter(todo => !todo.completed);
        case VISIBLE_FILTERS.ALL:
        default:
            return allTodos;
    }
};