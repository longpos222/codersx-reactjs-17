import React from "react";
import TodoItem from "./TodoItem";

import "./TaskList.css";


export default function TaskList(props) {
  const handleClick = (item) => {
    return (event) => props.handleToggle(item);
  };

  return (
    <div className="task-list">
      <div className="upcoming-list">
        {props.upcomingList.length !== 0 && <p>UPCOMING</p>}
        {props.upcomingList.map((item, index) => (
          <TodoItem item={item} key={index} onClick={handleClick(item)} />
        ))}
      </div>

      <div className="finished-list">
        {props.finishedList.length !== 0 && <p>FINISHED</p>}
        {props.finishedList.map((item, index) => (
          <TodoItem item={item} key={index} onClick={handleClick(item)} />
        ))}
      </div>
    </div>
  );
}
