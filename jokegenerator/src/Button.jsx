import React from "react";
import "./Button.css";

const Button = (props) => {
  return <button onClick={props.callApi}>Joke Generate</button>;
};
export default Button;
