import React,{createContext,useContext,useState} from 'react';

const CartContext = createContext();

export function CartProvider({children}){
    const [cartData, setCartData] = useState({ item: [], quantity: 0 });
    const [itemQuantity, setItemQuantity] = useState(0);

    const addToCart=(item)=>{
        setCartData({ item: [...cartData.item, item], quantity: cartData.quantity + 1 });
        setItemQuantity(itemQuantity + 1);
    };
    const clrBtn=()=>{
        setCartData({ item: null, quantity: 0 });
        setItemQuantity(0);
    };

    const handleIncrease = () => {
        // Increase the quantity and update OrgVal
        setItemQuantity(itemQuantity + 1);
      };
      const handleDecrease = () => {
        // Decrease the quantity and update OrgVal
        if (itemQuantity > 1) {
          setItemQuantity(itemQuantity - 1);
        }
    };

    const contextValue={
        cartData,
        addToCart,
        clrBtn,
        itemQuantity,
        handleIncrease,
        handleDecrease,
    };

    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart(){
    return useContext(CartContext);
}