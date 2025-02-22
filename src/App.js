import "./App.css";
import "./style.css";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";
import Todoitems from "./components/Todoitems.jsx";
import CountComponent from "./components/CountComponent.jsx";
import Timer from "./components/Timer.jsx";
import { useState } from "react";

function App() {
  const [isVisisble, setVisibel] = useState(true);
  return (
    <>
      <div className="todo-container">
        {/* <CountComponent /> */}
        {/* <Header title="Todoie App" />
        <Todoitems completed={false} text="Eat" />
        <Todoitems text="Homework" />
        <Todoitems text="project" />
        <Todoitems text="Sleep" />
        <Todoitems text="Music" />
        <Button /> */}

        <Timer />

        {/* {isVisisble ? <CountComponent /> : <></>}
        <button onClick={() => setVisibel(!isVisisble)}>Toggle</button> */}
      </div>
    </>
  );
}

export default App;
