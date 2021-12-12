import ProdCount from "./prodCount.jsx";
import React, {useState, useEffect} from "react";
import Product from "./product";
import DataService from "../services/dataService";
import "./catalog.css";

const Catalog = () => {
    //create a data state variable to contain an array
    const [data, setData]=useState([]);
    const [itemsToDisplay, setItemsToDisplay] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filterCat, setFilterCat] = useState("");


    const loadData =()=>{
        // get data from the service
        let service= new DataService(); //create an instance of a class
        let response=service.getCatalog();
        let data=service.getCatalog();
        console.log(response);
        setData(response);
        setItemsToDisplay(response);

        // 3-create a list
        
        //4-push every category into the list
        //5-print the list after the for loop
        //create a list with the unique categories
        let categories = [];
        for(let i=0; i < response.length; i++) {
            var prod = response[i];
            if (!categories.includes(prod.category)) {
                categories.push(prod.category);
            }
        }
        setCategories(categories);
    };
    
    // when the component loads, execute the arrow fn
    useEffect(()=>{
        loadData();
    }, []);

    const filterByCategory = (category) => {
        setFilterCat(category);
        let items = data.filter(p => p.category === category);
        setItemsToDisplay(items);
    };

    const clearFilter = () => {
        setFilterCat("");

        let items = [...data];
        setItemsToDisplay(items);
    }

    return (
    <div className="catalog-page">
        <h3>Check out our selection!</h3>

        <ProdCount count={data.length}></ProdCount>

        <div className="category-filter">

        <button onClick={clearFilter} className="btn btn-small btn-primary category-button">Show All</button>
        {categories.map(c => <button key={c} onClick={() => filterByCategory(c)} class="btn btn-small btn-primary category-button">{c}</button>)}
        </div>

        <div className="product-container">

            {itemsToDisplay.map((prod)=> <Product key={prod._id} prodData={prod}></Product>)}

        </div>
        

    </div>
    );
};

export default Catalog;