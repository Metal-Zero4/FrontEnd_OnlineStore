import React, {useState, useContext} from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker";
import storeContext from "../context/storeContext";

const Product =(props)=> {

    //create a state variable (quantity)
    const [quantity, setquantity] = useState(1);
    // connect to the context store
    const addProductToCart = useContext(storeContext).addProductToCart

    const quantityChange=(val)=>{
        console.log("Quantity has changed!", val);
        

        //set the state variable
        setquantity(val);
    };

    const getTotal=()=>{
        let total=quantity*props.prodData.price;
        return total.toFixed(2);
    };

    const addProd = () => {
        // call the context function
       
        let prodForCart = {
            ...props.prodData,
            quantity: quantity,
        };

        console.log(prodForCart);
        addProductToCart(prodForCart);
    };

    return ( 
    <div className="product">
        <label className="category">{props.prodData.category}</label>
        <img src={"/img/" + props.prodData.image} alt="" />
        <h5>{props.prodData.title}</h5>
        <h6>${getTotal()}</h6>
        <h6>${props.prodData.price.toFixed(2)}</h6>
        <QuantityPicker test= "something" onQuantityChange= {quantityChange}></QuantityPicker>
        <button className="btn btn-sm btn-primary" onClick= {addProd}>Add</button>
        
    </div>
    );
};

export default Product;
