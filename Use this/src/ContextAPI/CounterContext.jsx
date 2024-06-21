import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(prevCounter => prevCounter + 1);
    };

    return (
        <CounterContext.Provider value={{ counter, handleClick }}>
            {children}
        </CounterContext.Provider>
    );
};

export const useCounter = () => {
    return useContext(CounterContext);
};
