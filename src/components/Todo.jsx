import React, { useRef, useState, useEffect } from "react";
import todoIcon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : []
  );
  const inputRef = useRef();
  const handleAdd = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    }
    const newTask = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTask]);
    inputRef.current.value = "";
  };

  const deleteTask = (id) => {
    setTodoList((prevTask) => {
      return prevTask.filter((Todo) => Todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodoList((prevTask) => {
      return prevTask.map((Todo) => {
        if (Todo.id === id) {
          return { ...Todo, isComplete: !Todo.isComplete };
        }
        return Todo;
      });
    });
  };
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(todoList));
    console.log(todoList);
  }, [todoList]);

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* ---- title --- */}

      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todoIcon} alt="" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      {/* ---- input box --- */}

      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2
        placeholder:text-slate-600"
          type="text"
          placeholder="Add your task here!"
        />
        <button
          onClick={handleAdd}
          className="border-none rounded-full
        bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          ADD +
        </button>
      </div>

      {/* ---- To Do List --- */}

      <div>
        {todoList.map((item, index) => {
          return (
            <TodoItems
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTask={deleteTask}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
