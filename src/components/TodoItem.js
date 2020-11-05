import React from 'react';
import "./TodoItem.css";

export default function TodoItem(props) {
  return (
    <div className="todo-item" onClick={props.onClick}>
      {props.item.id}. {props.item.text} 
    </div> 
  )
}