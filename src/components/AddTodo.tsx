import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store";
import { Plus } from "lucide-react";

const AddTodo: React.FC = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text.trim()));
      setText("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between bg-[#222222] p-4"
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        className="flex-grow bg-transparent text-white placeholder-gray-400 outline-none"
      />
      <button type="submit" className="add-todo-btn ml-4">
        <Plus size={24} />
      </button>
    </form>
  );
};

export default AddTodo;
