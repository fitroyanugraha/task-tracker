import React from "react";
import Tick from "../assets/tick.png";
import Not_tick from "../assets/not_tick.png";
import Delete from "../assets/delete.png";

const TodoItems = ({ text, id, isComplete, deleteTask, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img src={isComplete ? Tick : Not_tick} alt="" className="w-7" />
        <p
          className={`ml-4 text-[17px] ${
            isComplete ? "text-gray-400" : "text-slate-700"
          }`}
        >
          {text}
        </p>
      </div>
      <div>
        <img
          onClick={() => {
            deleteTask(id);
          }}
          src={Delete}
          alt=""
          className="w-3.5 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TodoItems;
