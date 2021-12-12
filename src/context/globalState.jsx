import React, { useState } from 'react';
import storeContext from './storeContext';

const GlobalState = (props) => {
    const [myCart, setMyCart] = useState([]);
    const [myLoggedInUser, setMyLoggedInUser] = useState({});

    const addProductToMyCart = (product) =>{
        let copy = [...myCart]; // deep copy / clone
        
        /**
         * Create a for loop to travel the copy array
         * get each the [i] element from the copy array
         * and compare the element _id with the product _id
         *  if they are equal, console log a message
         */
        let alreadyInCart = false;
        for(let i=0; i < copy.length; i++){
            let item = copy[i];

            if(product._id === item._id) {
                console.log("Product already in cart");
                alreadyInCart = true;
                //sum the 
                item.quantity = item.quantity + product.quantity
            }
        }

        if (!alreadyInCart) {
            copy.push(product); //add it to cart
        }



        copy.push(product);

        setMyCart(copy);
    };

    const removeProductFromMyCart = (productId) => {
        console.log("Removing product", productId);
    };
    
    return (
        <storeContext.Provider 
            value={{
                cart: myCart,
                user: myLoggedInUser,
                addProductToCart: addProductToMyCart,
                removeProductFromCart: removeProductFromMyCart,
            }}>
            {props.children}
        </storeContext.Provider>
    );
};

export default GlobalState;