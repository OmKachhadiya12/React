import { createContext,useContext } from "react";

export const Todocontext = createContext({
    todos: [
        {
            id: 1,
            todo: "first msg",
            completed: "false"
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

export const useTodo = () => {
    return useContext(Todocontext); 
}

export const TodoProvider = Todocontext.Provider;