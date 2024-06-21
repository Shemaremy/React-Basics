import React, { useState } from "react";

function useCounter() {
    const [counter, setCount] = useState(0);
    const handleClick = () => {
        setCount(counter + 1);
    };

    const theP = () => {
        return (
            <div>
                <p className="number-1">{counter}</p>
            </div>
        );
    }

    return { counter, handleClick, theP };
}

export default useCounter;
