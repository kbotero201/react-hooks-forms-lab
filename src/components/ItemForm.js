import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")


  function handleSubmit(event){
    event.preventDefault()
    onItemFormSubmit({
      id: uuid(), 
      name,
      category,
    })
  }


  return (
    <form 
      onSubmit={handleSubmit}
      className="NewItem"
    >
      <label>
        Name:
        <input
          value={name} 
          onChange={(event) => setName(event.target.value)}
          type="text"  
          name="name" 
        />
      </label>

      <label>
        Category:
        <select 
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          name="category"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
