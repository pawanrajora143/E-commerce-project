import React, { createContext, useState } from 'react';
import all_product from '../Components/Assets/all_product';
import Cart from '../Pages/Cart';
import CartItems from '../Components/CartItems/CartItems';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[all_product[index].id] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
      console.log(updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) };
      return updatedCart;
    });
  };

  const getTotalCartAmount = () =>{
    let totalAmount = 0;
    for(const item in cartItems)
    {
  if(CartItems[item]>0)
    {
        let itemInfo = all_product.find((product)=>product.id ===Number(item))
        totalAmount += itemInfo.new_price * cartItems[item];
  }
  return totalAmount;
}
  }

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
