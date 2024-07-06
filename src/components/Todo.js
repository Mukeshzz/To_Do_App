import React,{ useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import EditTodo from "./EditTodo";
import { removeTodo } from "../app/features/todo/todoSlice";
import { Trash2 } from "lucide-react";
import { Pencil } from "lucide-react";

export default function Todo() {
  const [input, setInput] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleEdit = (todo) => {
    setEditingTodo(todo);
  };

  const handleCloseEdit = () => {
    setEditingTodo(null);
  };

  return (
    <>
      <div className="container mx-auto my-auto ">
        <ul className="list-none">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center px-10 py-3 text-2xl bg-slate-400 mt-4 font-semibold rounded text-slate-800"
            >
              {todo.text}
              <div className="flex justify-between gap-8  ">
                <div className="text-white">
                  <button onClick={() => handleEdit(todo)}>
                    <Pencil className="size-8" />
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-red-600"
                  >
                    <Trash2 className="size-8" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {editingTodo && (
        <EditTodo todo={editingTodo} onClose={handleCloseEdit} />
      )}
      </div>
    </>
  );
}
