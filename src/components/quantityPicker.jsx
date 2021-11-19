import React, { useState } from "react";
import "./quantityPicker.css"

const QuantityPicker = (props) =>{

    const [quantity, setQuantity]=useState(1);


    const increase = () => {
        let val = quantity + 1;
        setQuantity(val);
        props.onQuantityChange(val); // execute the fn received on props
    };

    const decrease=()=>{
        if (quantity > 1){
            let val = quantity-1;
            setQuantity(val);
            props.onQuantityChange(val);
        }
    };

    const test1=()=> {
        return <button>TEST</button>;
    };

    return (
    <div className="quantity-picker">
        <button className="btn btn-sm btn-dark" onClick={increase}>+</button>
        <label>{quantity}</label>
        <button  className="btn btn-sm btn-dark" onClick={decrease}>-</button>
    </div>
    );
};

export default QuantityPicker;