import React from 'react';
import Product from '../components/Product';
import { useSelector } from 'react-redux';


const Home = () => {
    let { cart } = useSelector((state) => ({ ...state }));
    return (
        <div class="container">
            <div className="home">
                <h1>I am home page</h1>
                <div className="checkout">checkout<span>{cart}</span></div>
            </div>
            <Product />
        </div>
    )
}

export default Home
