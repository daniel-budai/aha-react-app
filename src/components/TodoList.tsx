import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Todo from "./Todo";

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
