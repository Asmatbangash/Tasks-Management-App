import React, { createContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


export const Store = createContext({
    todos : [],
    addTodo : () => {},
    deleteTodo : () => {},
    updateTodo :  () => {},
    todoCompleted: () => {}
})



function ContextProvider({children}) {
    const [todos, setTodos] = useState([])
    
    const addTodo = (todo) => {
        setTodos((prevTodo) => [{ id: uuidv4(), todo: todo, completed: false }, ...prevTodo]);
    };

    const deleteTodo = (id) => {
        console.log(id)
        setTodos((prevTodo) => prevTodo.filter((todo)=> todo.id !== id))
        console.log('delete button was clicked')
    }

    const updateTodo = (id, updatedTodo) => {
        setTodos((prevTodo) =>
            prevTodo.map((todo) =>
                todo.id === id ? { ...todo, ...updatedTodo } : todo
            )
        );
    };
    const todoCompleted = (id) =>{
        setTodos((prevTodo) => prevTodo.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    useEffect(() => {
         const todos = JSON.parse(localStorage.getItem("todo"))
         if(todos && todos.length > 0){
            setTodos(todos)
         }
    },[])

    useEffect(() =>{
        localStorage.setItem("todo", JSON.stringify(todos))
    },[todos])

  return (
    <Store.Provider value={{todos,setTodos, addTodo, deleteTodo, updateTodo, todoCompleted}}>{children}</Store.Provider>
  )
}

export default ContextProvider