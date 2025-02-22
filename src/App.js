import "./App.css";
import "./style.css";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";
import Todoitems from "./components/Todoitems.jsx";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Todoitems />
        <Todoitems />
        <Todoitems />
        <Button />
      </div>
    </>
  );
}

export default App;
