import React from "react";
import Navbar from "../components/Navbar";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";

const TodoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <TodoList />
      </div>
      <AddTodo />
    </div>
  );
};

export default TodoPage;
