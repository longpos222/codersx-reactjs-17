import React, { useState } from "react";

export default function Modal(props) {
  const [text, setText] = useState("");

  const onChange = (event) => {
    setText(event.target.value);
    if (event.target.value.length === 0) props.handleChange() ;
  };

  const handleSubmit = (event) => {
    console.log(text);
    if (!text) return;
    event.preventDefault();
    props.handleAddNew({ id: props.nextIDNumber, text: text, finished: false });
    setText("");
  };

  return (
    <div id="overlay" style={{ display: props.isDisplay }}>
      <div className="modal">
        <input
          type="text"
          value={text}
          onChange={onChange}
          onClick={props.onClick}
          placeholder="Type here to add new item ..."
        />
        <input
          onClick={handleSubmit}
          style={{ display: props.isHide }}
          type="submit"
          value="Add"
        />
      </div>
    </div>
  );
}
