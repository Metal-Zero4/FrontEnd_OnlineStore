import "./product.css";
import QuantityPicker from "./quantityPicker";

const Product =(props)=> {
    return ( 
    <div className="product">
        <label className="category">{props.prodData.category}</label>
        <img src={"/img/" + props.prodData.image} alt="" />
        <h5>{props.prodData.title}</h5>
        <h6>$</h6>
        <h6>${props.prodData.price}</h6>
        <QuantityPicker></QuantityPicker>
        <button className="btn btn-sm btn-primary">Add</button>
        
    </div>
    );
};

export default Product;
