import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css';


const Product = (props) => {
   
    const{handler} = props;
    const {img,name,price,seller,ratings} = props.product;
    
    return (
        <div className='prodect-info'>
            <img src={img} alt=""/>
           <div className='info-product'>
                <p className='product-name'>{name}</p>
                <p>Price : {price}</p>
                <p>Seller : {seller}</p>
                <p>Ratings: {ratings} stars</p>
           </div>
           <button className='btn-cart'>
            <p className='btn-text' onClick= {() => handler(props.product)}>Add To Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Product;