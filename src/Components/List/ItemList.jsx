import React, { useContext, useState } from 'react';
import { Store } from '../../Store/ContextProvider';

function ItemList() {
  const { todos, updateTodo, deleteTodo } = useContext(Store);
  const [editableTodoId, setEditableTodoId] = useState(null); // Track which todo is being edited
  const [updatedText, setUpdatedText] = useState(''); // Track the updated text for the todo

  // Handle updating a todo
  const handleUpdate = (id, updatedTodo) => {
    updateTodo(id, updatedTodo);
    setEditableTodoId(null); // Exit edit mode
  };

  // Handle deleting a todo
  const handleDelete = (id) => {
    deleteTodo(id);
  };

  // Handle toggling the completed status of a todo
  const handleToggleCompleted = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      updateTodo(id, { ...todo, completed: !todo.completed });
    }
  };

  return (
    <>
      {todos.map((todo) => (
        <div
          className="flex flex-col gap-2 w-1/1 sm:w-130 md:w-120 text-[10px] sm:text-xs z-50 my-2"
          key={todo.id}
        >
          <div className="error-alert cursor-default flex items-center justify-center w-full h-10 sm:h-14 rounded-lg bg-[#A4A4A4] px-[10px]">
            <div className="flex items-center gap-2">
              {/* Checkbox to toggle completed status */}
              <div className="text-[#d65563] bg-white/5 backdrop-blur-xl p-1 rounded-lg cursor-pointer">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleCompleted(todo.id)}
                  className="cursor-pointer"
                />
              </div>
              {/* Input field for todo text */}
              <input
                type="text"
                value={editableTodoId === todo.id ? updatedText : todo.todo}
                onChange={(e) => setUpdatedText(e.target.value)}
                readOnly={editableTodoId !== todo.id}
                className={`w-65 sm:w-100 text-black text-base font-medium outline-none ${
                  todo.completed ? 'line-through' : ''
                }`}
              />
            </div>
            <div className="flex">
              {/* Edit button */}
              {editableTodoId === todo.id ? (
                <button
                  className="text-gray-600 hover:bg-white/10 p-1 rounded-md transition-colors ease-linear cursor-pointer"
                  onClick={() => handleUpdate(todo.id, { ...todo, todo: updatedText })}
                >
                  📁
                </button>
              ) : (
                <button
                  className="text-gray-600 hover:bg-white/10 p-1 rounded-md transition-colors ease-linear cursor-pointer"
                  onClick={() => {
                    setEditableTodoId(todo.id);
                    setUpdatedText(todo.todo);
                  }}
                >
                  ✏
                </button>
              )}
              <button
                className="text-gray-600 hover:bg-white/10 p-1 rounded-md transition-colors ease-linear cursor-pointer"
                onClick={() => handleDelete(todo.id)}
              >
                ❌
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ItemList;