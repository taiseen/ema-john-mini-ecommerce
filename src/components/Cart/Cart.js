import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {

    const cart = props.ordered;
    console.log(cart);

    //const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);

    // Total Cost
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = totalPrice + product.price;
    }

    // Shipping cost
    let shipping = 0;
    if (totalPrice > 35) {
        shipping = 0;
    } else if (totalPrice > 15) {
        shipping = 4.99;
    } else if( totalPrice > 0){
        shipping = 12.99;
    }

    const tax = (totalPrice * .1).toFixed(2);
    const grandTotal = (totalPrice + shipping + Number(tax)).toFixed(2);

    // const formantNumber = num => {
    //     const precision = num.toFixed(2);
    //     return Number(precision);
    // }

    return (
        <div>
            <h1>Cart</h1>
            <p>Items Orderer</p>
            <h5>Order Summery: {cart.length}</h5>
            <p>Total Product Price : ${totalPrice.toFixed(2)}</p>
            <p>Shipping Cost : ${shipping.toFixed(2)}</p>
            <p><small>Tax + Vat : ${tax} </small></p>
            <p>Total Price : ${grandTotal}</p>

            <button className="btn">
                <FontAwesomeIcon icon={faShoppingCart} /> Products
            </button>
        </div>
    );
};

export default Cart;