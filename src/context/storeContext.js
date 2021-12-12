import React from 'react';
// describe the data / function that you want to put in the state
export default React.createContext({
    cart: [],
    user: {},

    addProductToCart: (product) => {},
    removeProductFromCart: (product) => {},

});