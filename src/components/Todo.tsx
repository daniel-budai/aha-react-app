import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../store";
import { Trash2 } from "lucide-react";

interface TodoProps {
  id: number;
  text: string;
  completed: boolean;
}

const Todo: React.FC<TodoProps> = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between todo-separator py-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toggleTodo(id))}
          className="mr-3"
        />
        <span className={`todo-text ${completed ? "todo-completed" : ""}`}>
          {text}
        </span>
      </div>
      <button
        onClick={() => dispatch(deleteTodo(id))}
        className="text-red-500 hover:text-red-700"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default Todo;
