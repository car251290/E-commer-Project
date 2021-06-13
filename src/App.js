import React,{useState,useEffect} from 'react';
import { Navbar, Products} from './components';
import {commerce} from './lib/commerce'

const App = () => {
    const [products,setProducts] = useState([]);

    const fetchProduct = async () => {
        //how you ansync the class commerce to display the products
        const {data} = await commerce.products.list()
        //asking the dat responce
        setProducts(data)
    }

//Hooks option to use the effect of the fect data 
    useEffect( () => {
        fetchProduct();

    },[]);

    //console.log(products);
    console.log(products);
    return (
        <div>
        <Navbar/>
         <Products products={products}/>
        </div>
    )
}

export default App
