import React, { useState } from "react";

function Task() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // New states for the "Add" feature
  const [newItemName, setNewItemName] = useState("");
  const [newItemCategory, setNewItemCategory] = useState("cars");

  // This is now a state array so we can modify it!
  const [items, setItems] = useState([
    { name: "BMW", categories: ["cars"] },
    { name: "Orange", categories: ["colors", "fruits"] },
    { name: "Volvo", categories: ["cars"] },
    { name: "Red", categories: ["colors"] },
    { name: "Ford", categories: ["cars"] },
    { name: "Blue", categories: ["colors"] },
    { name: "Cat", categories: ["animals"] },
    { name: "Dog", categories: ["animals"] },
    { name: "Melon", categories: ["fruits"] },
    { name: "Kiwi", categories: ["fruits", "animals"] },
    { name: "Banana", categories: ["fruits"] },
    { name: "Lemon", categories: ["fruits"] },
    { name: "Cow", categories: ["animals"] },
  ]);

  const handleAddItem = () => {
    if (newItemName.trim() === "") return; 
    
    const newItem = {
      name: newItemName,
      categories: [newItemCategory]
    };
    
    setItems([...items, newItem]); 
    setNewItemName("");
  };

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = items.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.categories.includes(selectedCategory);
  });

  return (
    <div className="container">
      <div id="myBtnContainer">
        {["all", "cars", "animals", "fruits", "colors"].map((category) => (
          <button
            key={category}
            className={`btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => handleFilterClick(category)}
          >
            {category === "all" ? "Show all" : category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="add-section" style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Enter item name..."
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          className="add-input"
        />
        
        <select 
          value={newItemCategory} 
          onChange={(e) => setNewItemCategory(e.target.value)}
          className="add-select"
        >
          <option value="cars">Cars</option>
          <option value="animals">Animals</option>
          <option value="fruits">Fruits</option>
          <option value="colors">Colors</option>
        </select>

        <button onClick={handleAddItem} className="btn add-btn">
          + Add
        </button>
      </div>

      {/* --- Items Row --- */}
      <div className="items-row">
        {filteredItems.map((item, index) => (
          <div key={index} className="filterDiv">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task;