import React from "react";
import "../style.css"

const Todoitems = () => {
    return (
        <>
            <li className="todo-item">
                <span>
                    <input type="checkbox" />
                    <span>Eat</span>
                </span>

            </li>
        </>
    )
}

export default Todoitems;