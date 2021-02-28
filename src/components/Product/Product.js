import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {

    //console.log(props);
    const { name, img, price, stock, seller, } = props.product;

    return (
        <div className="product">
            <div class="product-photo">
                <img src={img} />
            </div>

            <div className="product-info">
                <h4>{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p><b>${price}</b></p>
                <br />
                <p><small>Only {stock} left in stock - Order Soon </small></p>

                <button className="btn" onClick={()=> props.btnClick(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;