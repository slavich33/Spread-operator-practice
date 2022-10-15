import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  function handleItem(event) {
    const newValue = event.target.value;
    setItem(newValue);
  }

  function addItems() {
    console.log(item);
    setItems((previtems) => {
      return [...previtems, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input
          type="text"
          onChange={handleItem}
          name="inputValue"
          value={item}
        />
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => {
            return <li>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
