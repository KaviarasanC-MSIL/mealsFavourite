/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import { CartContext } from '../App';

export const Product = ({ product }) => {
    const { cart, setCart } = useContext(CartContext);

    const addCart = () => {
        setCart([...cart, product]);
    };
    
    const removeCart = () => {
        setCart(cart.filter((item) => item.productId !== product.productId));
    };

    return (
        <>
        <div className='product'>
            <Link to={`/category/${product.productName}`} >
                <div className='img'>
                    <img src={product.productImage} alt={`Image of ${product.productName}`} />
                </div>
            </Link>
            <div className='details'>
                <h3>{product.productName}</h3>
                {cart.some((item) => item.productId === product.productId) ? (
                    <button className='remove-cart-btn' onClick={removeCart}>Remove from Cart</button>
                ) : (
                    <button onClick={addCart}>Add to Cart</button>
                )}
            </div>
        </div>
        </>
    );
};
