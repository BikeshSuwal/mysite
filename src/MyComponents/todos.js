import React from "react";
import { Todoitem } from "./todoitem";

export default function Todos() {
  let todos = [
    {
      sno: 1,
      title: "make components of navitems",
      desc: "divide each navitems into components",
    },
    {
      sno: 2,
      title: 'add projects to "projects"',
      desc: "add todo projects to the projects",
    },
    {
      sno: 3,
      title: "remaining works",
      desc: "give finishing touches",
    },
  ];
  return (
    <>
      <div className="divtitle">
        <span>Todos</span>
      </div>
      {todos.map((todo) => {
        return <Todoitem todo={todo} key={todo.sno} />;
      })}
    </>
  );
}
