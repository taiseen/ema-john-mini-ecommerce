import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    // get 10 data form data source 
    const first10Data = fakeData.slice(0, 10);
    //console.log(first10Data);
    
    const [products, setProducts] = useState(first10Data);
    const [cart , setCart] = useState([]);

    // event handler ঐ খানেই add করবো, যেখানে State টা আছে... very very important
    const addProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">

            {/* ================= Product Component ================= */}
            <div className="product-container">
                {   // parent send object & function...
                    products.map(pd => <Product product={pd} btnClick={addProduct}></Product>)
                }
            </div>

            {/* ================= Cart Component ================= */}
            <div className="cart-container">
                <Cart ordered={cart}> </Cart>
            </div>

        </div>
    );
};

export default Shop;