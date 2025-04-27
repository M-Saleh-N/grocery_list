import { useState } from "react";
import './List.css';

function GroceryList() {
  const [items, setItems] = useState([]);
  const [checked, setChecked] = useState({});
  const [input, setInput] = useState("");

  const addItem = () => {
    if (!input.trim()) return;
    setItems([...items, input.trim()]);
    setInput("");
  };

  const toggleCheck = (item) => {
    setChecked((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <div className="grocery-container">
      <h1>🛒 Grocery List</h1>
      <div className="add-section">
        <input
          type="text"
          placeholder="Add new item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>

      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <input
              type="checkbox"
              checked={!!checked[item]}
              onChange={() => toggleCheck(item)}
            />
            <span className={checked[item] ? "checked" : ""}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GroceryList;