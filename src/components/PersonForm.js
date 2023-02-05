import React from "react";
import { useState } from "react";
import FirstChild from "./FirstChild";

export default function PersonForm() {
 // const data = "Hello everyone";
  const data = {id : '1', name: 'Mit'};
  const [firstName, setFirstName] = useState("");
  const [updated, setUpdated] = useState("");
  
  const handleChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleClick = () => {
    setUpdated(firstName);
    console.log("Updated value - ", updated);
  };

  return (
    <div>
      <label>First Name:</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        onChange={handleChange}
        value={firstName}
      />
      <h2>First Name: {firstName}</h2>

      <button onClick={handleClick}>Update</button>
      <FirstChild data = {data} /> 
    </div>
  );
}