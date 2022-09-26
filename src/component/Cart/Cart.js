import React from 'react';
import './Cart.css';

const Cart = (props) => {
    
    const {cart} = props;
    console.log(cart)

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    //tax
    const tax = parseFloat((total * 10/100).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h3>Order summary</h3>
            {/* <h5>Selected Item: {cart.length}</h5> */}
            <h5>Selected Item: {quantity}</h5>
            <p>Total price: $ {total}</p>
            <p>Total Shiping: {shipping} </p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: {grandTotal.toFixed(2)} </h5>
        </div>
    );
};

export default Cart;