import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getDataDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProduct] = useState([])
    const [cartAdd, setCartAdd] =useState([])

    useEffect(() => {
        fetch(`products.json`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])


    useEffect( () => {
        const storeCart = getDataDb();
        const saveCart = [];
         for(const id in storeCart){
            const addedProducts = products.find(product=> product.id == id);
            if(addedProducts){
                const quantity = storeCart[id];
                addedProducts.quantity =quantity;
                saveCart.push(addedProducts)
 
            }
           
         }
         setCartAdd(saveCart);
    },[products])

    // (react unidirectional) event handler dynamic vabe ak step niche pathano hoyece
    const handlerAddToCart =(product) => {
        //react er niom onusare array te push kora jai na copy kore bosate hoi
         const newCartProduct = [...cartAdd,product];
         setCartAdd(newCartProduct);
         addToDb(product.id);
    }


    return (
        <div className='shopContainer'>
            <div className='product-container'>
                 {
                    products.map(product => <Product
                         product ={product} 
                         unique = {product.id}
                         handler = {handlerAddToCart}
                         ></Product>)
                 }
            </div>
            <div className='cart-container'>
                <Cart cart= {cartAdd}></Cart>
            </div>
        </div>
    );
};

export default Shop;