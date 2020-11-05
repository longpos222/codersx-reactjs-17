import React from "react";
import "./AddButton.css";

export default function AddButton(props) {
  return (
    <div className="add-button">
      <button 
        className="add-icon" 
        onClick={props.onAddButton}
      >
        <p>+</p>
      </button>
    </div>
  );
}
