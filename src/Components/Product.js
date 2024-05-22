import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../app/cartSlice';

export const Product = ({ product }) => {
    const [isProductInCart, setIsProductInCart] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('user')) || [];
        const activeUser = users.find(user => user.status === 'active');
        if (activeUser) {
            const cart = activeUser.cart || [];
            const productInCart = cart.some(item => item.productId === product.productId);
            setIsProductInCart(productInCart);
        }
    }, [product.productId]);

    const handleCartAction = () => {
        const users = JSON.parse(localStorage.getItem('user')) || [];
        const userIndex = users.findIndex(user => user.status === 'active');

        if (userIndex > -1) {
            let user = users[userIndex];
            user.cart = user.cart || [];

            const productIndex = user.cart.findIndex(item => item.productId === product.productId);

            if (productIndex === -1) {
                user.cart.push(product);
                setIsProductInCart(true);
                dispatch(addToCart(product));
            } else {
                user.cart.splice(productIndex, 1);
                setIsProductInCart(false);
                dispatch(removeFromCart(product.productId));
            }

            users[userIndex] = user;
            localStorage.setItem('user', JSON.stringify(users));
        }
    };

    return (
        <div className='product'>
            <Link to={`/category/${product.productName}`} >
                <div className='img'>
                    <img src={product.productImage} alt={`Image of ${product.productName}`} />
                </div>
            </Link>
            <div className='details'>
                <h3>{product.productName}</h3>
                {isProductInCart ? (
                    <button className='remove-cart-btn' onClick={handleCartAction}>Remove from Cart</button>
                ) : (
                    <button onClick={handleCartAction}>Add to Cart</button>
                )}
            </div>
        </div>
    );
};
