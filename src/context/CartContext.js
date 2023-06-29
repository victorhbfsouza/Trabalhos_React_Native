import React, { createContext, useState, useEffect } from 'react';
import { saveItem, getValueFor } from "../../src/services/DateService";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

    useEffect(() => {
        getCartStorage();
    }, [])
    
    useEffect(() => {
    }, [cart])

  const saveCartContext = async (id) => {
    await saveItem("carrinho", id);
    getCartStorage()
  }

  const getCartStorage = async () => {
    let storageCart = await getValueFor('carrinho')
    let arrStorageCart = JSON.parse(storageCart)
    setCart(arrStorageCart)
  }


  return (
    <CartContext.Provider value={{
        cart,
        setCart,
        saveCartContext,
    }}>
      {children}
    </CartContext.Provider>
  );
};
