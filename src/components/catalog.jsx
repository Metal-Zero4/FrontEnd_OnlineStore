import "./catalog.css";
import Product from "./product";
import QuantityPicker from "./quantityPicker";

const Catalog = () => {
    return (
    <div className="catalog-page">
        <h3>Check out our selection!</h3>
        <div className="product-container">
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        </div>
        

    </div>
    );
};

export default Catalog;