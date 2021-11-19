import "./admin.css"
import Product from "./product";
const Admin=(props)=>{
    return (
    <div className="admin-page">
        <h1>Manage Your Products</h1>
        <div className="capture-product">

        <div className="my-control">
            <label>Title</label>
            <input type="text" />
        </div>
        <div className="my-control">
            <label>Price</label>
            <input type="number" />
        </div>
        <div className="my-control">
            <label>Stock</label>
            <input type="number" />
        </div>
        <div className="my-control">
            <label>Image</label>
            <input type="number" />
        </div>
        <div className="my-control">
            <label>Category</label>
            <input type="text" />
        </div>
        <div className="my-control">
            <label>Discount</label>
            <input type="number" />
        </div>

        </div>
    </div>
    );
};
export default Admin;