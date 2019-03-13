import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>React Hooks </h1>
      <h2>My Responsive Component</h2>
      <MyResponsiveComponent />
      <h2>Input Component</h2>
      <InputComponent />
    </div>
  );
}

function MyResponsiveComponent() {
  const height = useHandleHeight(); // handleHeight custom hooks
  const width = useHandleWidth(); // handleWidth custom hooks
  return (
    <div>
      <p>This is my height: {height} px</p>
      <p>This is my width: {width} px</p>
    </div>
  );
}

function useHandleHeight() {
  const [height, setHeight] = useState(window.innerHeight);
  const handleHeight = () => setHeight(window.innerHeight); // handle height function
  useEffect(() => {
    window.addEventListener("resize", handleHeight); //initialize listener
    return () => {
      window.removeEventListener("resize", handleHeight); //remove event listerner with a retuen function
    };
  });
  return height;
}

function useHandleWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWidth = () => setWidth(window.innerWidth); // handle width function
  useEffect(() => {
    window.addEventListener("resize", handleWidth); // initialize listener
    return () => {
      window.removeEventListener("resize", handleWidth); //remove event listerner with a retuen function
    };
  });
  return width;
}

function InputComponent() {
  const userName = useHandleInput("Bob"); //create userName with useHanldeInput custom hooks
  const passWord = useHandleInput("Alice"); //same as ablve
  //spread userName and password to input
  return (
    <div>
      <label>UserName:</label>
      <input {...userName} type="text" />
      <br />
      <label>Password:</label>
      <input {...passWord} type="password" />
      <p>This is my UserName : {userName.value}</p>
      <p>This is my UserName : {passWord.value}</p>
    </div>
  );
}

function useHandleInput(initialValue) {
  //create useHandleInput custom hools
  const [value, setValue] = useState(initialValue);

  function onChange(e) {
    setValue(e.target.value);
  }
  return { value, onChange };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
