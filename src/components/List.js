import { useState } from "react";
import './list.css';

function GroceryList() {
  const [items, setItems] = useState([]);
  const [checked, setChecked] = useState({});
  const [input, setInput] = useState("");

  const addItem = () => {
    if (!input.trim()) return;
    setItems([...items, input.trim()]);
    setInput("");
  };

 
}

export default GroceryList;