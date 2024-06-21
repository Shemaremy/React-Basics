import React from "react";
import '../index.css';
import { useCounter } from "./CounterContext";

function BasicExample() {
    const { handleClick } = useCounter();

    return (
        <div className="exampleOne_container">
            <h1>Example One</h1>
            <div className="rest-1">
                <button className="click-1" onClick={handleClick}>Click</button>
            </div>
        </div>
    );
}

export default BasicExample;
