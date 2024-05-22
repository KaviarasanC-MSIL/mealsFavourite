import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

export const Product = ({ product }) => {
    const [isProductInCart, setIsProductInCart] = useState(false);

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('user')) || [];
        const activeUser = users.find(user => user.status === 'active');
        if (activeUser) {
            const cart = activeUser.cart || [];
            const productInCart = cart.some(item => item.productName === product.productName);
            setIsProductInCart(productInCart);
        }
    }, [product.productName]);

    const handleAddToCart = () => {
        const users = JSON.parse(localStorage.getItem('user')) || [];
        const userIndex = users.findIndex(user => user.status === 'active');
        if (userIndex > -1) {
            let user = users[userIndex];
            user.cart = user.cart || [];
            user.cart.push(product);
            users[userIndex] = user;
            localStorage.setItem('user', JSON.stringify(users));
            setIsProductInCart(true);
        }
    };

    const handleRemoveFromCart = () => {
        const users = JSON.parse(localStorage.getItem('user')) || [];
        const userIndex = users.findIndex(user => user.status === 'active');
        if (userIndex > -1) {
            let user = users[userIndex];
            user.cart = user.cart || [];
            user.cart = user.cart.filter(item => item.productName !== product.productName);
            users[userIndex] = user;
            localStorage.setItem('user', JSON.stringify(users));
            setIsProductInCart(false);
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
                    <button className='remove-cart-btn' onClick={handleRemoveFromCart}>Remove from Cart</button>
                ) : (
                    <button onClick={handleAddToCart}>Add to Cart</button>
                )}
            </div>
        </div>
    );
};
