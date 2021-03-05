import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {

    // Child get 2 things ==> 
    // 1) Object & 
    // 2) Function 
    //        1)         2)
    const { product, btnClick } = props;

    const { name, img, price, stock, seller, key } = product;

    return (
        <div className="product">

            <div class="product-photo">
                <img src={img} />
            </div>

            <div className="product-info">
                <h4>
                    <Link to={`/product/${key}`}>
                        {name}
                    </Link>
                </h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p><b>${price}</b></p>
                <br />
                <p><small>Only {stock} left in stock - Order Soon </small></p>

                <button className="btn" onClick={() => btnClick(product)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                </button>
            </div>

        </div>
    );
};

export default Product;