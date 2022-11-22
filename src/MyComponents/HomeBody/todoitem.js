import React from "react";

export const Todoitem = ({ todo }) => {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
    </div>
  );
};
