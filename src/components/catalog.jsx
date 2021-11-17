import "./catalog.css";
import ProdCount from "./prodCount.jsx";
import React, {useState, useEffect} from "react";
import Product from "./product";
import DataService from "../services/dataService";

const Catalog = () => {
    //create a data state variable to contain an array
    const [data, setData]=useState([]);

    const loadData =()=>{
        console.log("catalog loaded!");
        // get data from the service
        let service= new DataService(); //create an instance of a class
        let response=service.getCatalog();
        let data=service.getCatalog();
        console.log("The data", response);
        setData(response);

    };
    
    // when the component loads, execute the arrow fn
    useEffect(()=>{
        loadData();
    }, []);
    return (
    <div className="catalog-page">
        <h3>Check out our selection!</h3>
        <ProdCount count={data.length}></ProdCount>
        <div className="product-container">
        {data.map((prod)=> <Product key={prod._id} prodData={prod}></Product>)}
        </div>
        

    </div>
    );
};

export default Catalog;