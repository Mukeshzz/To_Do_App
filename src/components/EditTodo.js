import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodo } from "../app/features/todo/todoSlice";

const EditTodo = ({ todo, onClose }) => {
  const [input, setInput] = useState(todo.text);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editTodo({ id: todo.id, text: input }));
    onClose();
  };

  return (
    <div className="flex justify-center">

    <form onSubmit={handleEdit} className="flex w-full max-w-md">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow p-2 rounded-l-md border border-gray-300"
        />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-md">
        Save
      </button>
      <button onClick={onClose} className="bg-red-500 text-white p-2 rounded-r-md ml-2">
        Cancel
      </button>
    </form>
        </div>
  );
};

export default EditTodo;

