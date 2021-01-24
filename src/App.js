import React,{useState,useEffect} from 'react';
import { Navbar, Products} from './components';
import {commerce} from './lib/commerce'

const App = () => {
    const [products,setProducts] = useState([]);

    const fetchProduct = async () => {
        const {data} = await commerce.products.list()
        //asking the dat responce
        setProducts(data)
    }

    useEffect(()=>{
        fetchProduct();

    },[]);

    console.log(products);

    return (
        <div>
        <Navbar/>
         <Products products={products}/>
        </div>
    )
}

export default App