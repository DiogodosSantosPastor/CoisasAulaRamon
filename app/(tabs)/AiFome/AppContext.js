import React, { createContext, useState } from 'react';

export const AppContext = createContext(); 

export const AppProvider = ({ children }) => {
    const [carrinhoItems, setCarrinhoItems] = useState([]);

    const addItemToCarrinho = (item) => {
        setCarrinhoItems(prevItems => [...prevItems, item]); 
    };

    return (
        <AppContext.Provider value={{ carrinhoItems, addItemToCarrinho }}>
            {children}
        </AppContext.Provider>
    );
};
