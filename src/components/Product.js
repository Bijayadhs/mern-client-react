import React from 'react';
import { useDispatch } from 'react-redux';

const Product = () => {
    const dispatch = useDispatch();
    const handleCart = () => {
        dispatch({ type: 'ADD_CART' })
    }
    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }
    return (
        <div className="product">
            <h2>I am product</h2>
            <button onClick={handleCart}> Add to cart</button>
            <button onClick={clearCart}> Clear Cart</button>

        </div>
    )
}

export default Product
