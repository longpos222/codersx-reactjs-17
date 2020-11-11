import React, { useState } from "react"; 
import "./App.css";
import TaskList from "./TaskList";
import AddButton from "./AddButton";
import Modal from "./Modal";

import homeImage from "../white.svg";

// const dataList = [
//   { finished: false, id: 1, text: "working on project" },
//   { finished: true, id: 2, text: "Doing Homework" },
//   { finished: false, id: 3, text: "learning" },
// ];

function App() {
  const [dataList, setDataList] = useState([]);

  const handleAddNew = (newList) => {
    setDataList((dataList) => [...dataList, newList]);
  };
  const handleToggle = (item) => {
    setDataList((dataList) => {
      return [
        ...dataList.slice(0, item.id - 1),
        { ...item, finished: !item.finished },
        ...dataList.slice(item.id, dataList.length),
      ];
    });
  };
  const upcomingList = dataList.filter((item) => item.finished === false);
  const finishedList = dataList.filter((item) => item.finished === true);

  const [modal, setModal] = useState({ isDisplay: "none" });
  const handleOpenModal = (modal) => {
    setModal((modal) => (modal = { isDisplay: "flex" }));
  };

  const handleCloseModal = (modal) => {
    setModal((modal) => (modal = { isDisplay: "none" }));
  };

  const [newItem, setNewItem] = useState({});
  const handleChange = (newItem) => {
    setNewItem((newItem) => (newItem = { isHide: "none" }));
  };

  return (
    <div className="App">
      <div className="App-header">
        <span class="material-icons">menu</span>
        <p>D A I L I S T</p>
      </div>
      <div className="bd">
        <div className="home-image">
          {dataList.length === 0 && <img src={homeImage} alt="homeImage" />}
        </div>
      </div>
      <div className="content">
        <TaskList
          upcomingList={upcomingList}
          finishedList={finishedList}
          handleToggle={handleToggle}
        />
      </div>

      <AddButton onAddButton={handleOpenModal} />
      <Modal
        isDisplay={modal.isDisplay}
        isHide={newItem.isHide}
        handleChange={handleChange}
        handleAddNew={handleAddNew}
        nextIDNumber={dataList.length + 1}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
}

export default App;
