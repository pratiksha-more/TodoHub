import "./App.css";
import "./style.css";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";
import Todoitems from "./components/Todoitems.jsx";

function App() {
  return (
    <>
      <div className="todo-container">
        <Header title="Todoie App" />
        <Todoitems completed={false} text="Eat" />
        <Todoitems text="Homework" />
        <Todoitems text="project" />
        <Todoitems text="Sleep" />
        <Todoitems text="Music" />

        <Button />
      </div>
    </>
  );
}

export default App;
