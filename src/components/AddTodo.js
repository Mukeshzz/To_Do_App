import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/features/todo/todoSlice";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addToHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <div className="container mx-auto mt-8">
        <h1 className="text-4xl text-center text-white">To Do Application</h1>
        <div className="flex justify-center rounded mt-5">
          <form onSubmit={addToHandler}>
            

            <input
              type="text"
              placeholder="Enter a ToDo..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border rounded py-1 px-2 m-4 "
              />
              
              

            <button type="submit" className="text-white bg-blue-500 rounded py-1 px-2 border">
              Add Task
            </button>
              
          </form>
        </div>
      </div>
    </>
  );
}
