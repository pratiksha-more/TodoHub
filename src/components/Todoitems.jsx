import React from "react";
import "../style.css"

const Todoitems = (props) => {
    return (
        <>
            <li className="todo-item">
                <span>
                   {props.completed?<></>: <input type="checkbox" />}
                    <span className="todo-text">{props.text}</span>
                    
                </span>
                <p>....</p>

            </li>
        </>
    )
}

export default Todoitems;