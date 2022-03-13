import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';



import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';

import { Routes, Route, Link, useNavigate } from "react-router-dom";

function App() {
    const [productList, setProductList] = useState([]);
    const [prodDetails, setProdDetails] = useState(null);
    const [sortOrder, setSortOrder] = useState("asc");

    const navigate = useNavigate();


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products?sort=${sortOrder}`)
            .then(res=>res.json())
            .then(json=>{setProductList(json);
            });
    }, [sortOrder]);

    function addItem() {
        fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>alert("New item's id = "+ json.id));
    }

    function deleteItem(id) {
        fetch(`https://fakestoreapi.com/products/${id}`,{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=> alert("The deleted item's title: "+json.id));
    }


    function showProductList() {
        setProdDetails(null);
        navigate("/");
    }

    function getDetails(id) {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>{setProdDetails(json);
            });
        navigate(`/product-details/${id}`);
    }

    return(
        <Routes>
            {
                prodDetails ? ( <Route path="/product-details/:id" element={<ProductDetails prodDetails={prodDetails} showProductList={showProductList} />} /> ) :
                <Route path="/" element={<ProductList productList={productList} getDetails={getDetails} setSortOrder={setSortOrder} addItem={addItem} deleteItem={deleteItem} />} />
            }
            <Route path="*" element={<>404 page not found</>} />
         </Routes>
    );
}

export default App;
