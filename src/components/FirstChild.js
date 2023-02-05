import React from "react";
import SecondChild from "./SecondChild";

const FirstChild = (props) => {
  return (
    <div>
      <h2> Message from first component </h2>
      <h3> Name - {props.data.name} </h3>
      <h3> Id - {props.data.id} </h3>
      {console.log("First component - ", props.data)}
      <SecondChild data = {props.data}/>
    </div>
  );
};

export default FirstChild;
