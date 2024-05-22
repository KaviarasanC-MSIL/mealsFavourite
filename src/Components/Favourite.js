import React, { useEffect, useState } from 'react';
import './Favourite.css';
import emptyfavourite from '../assets/emptycart.png';

export const Favourite = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("user")) || [];
        const activeUser = storedUsers.find(user => user.status === 'active');
        if (activeUser) {
            const cartData = activeUser.cart || [];
            setCart(cartData);
        }
    }, []);

    const removeCart = (productId) => {
        const storedUsers = JSON.parse(localStorage.getItem("user")) || [];
        const activeUserIndex = storedUsers.findIndex(user => user.status === 'active');
        if (activeUserIndex > -1) {
            const updatedCart = cart.filter(product => product.productId !== productId);
            storedUsers[activeUserIndex].cart = updatedCart;
            localStorage.setItem("user", JSON.stringify(storedUsers));
            setCart(updatedCart);
        }
    };

    return (
        <div className='favouriteContainer'>
            <h1 className='cart-heading'>Favourite Product</h1>
            {cart.length === 0 ? (
                <div>
                    <img src={emptyfavourite} alt='Empty Cart' />
                    <p>No items in the cart</p>
                </div>
            ) : (
                <div className="cart-container">
                    {cart.map((product) => (
                        <div className="cart-product" key={product.productId}>
                            <div className="img">
                                <img src={product.productImage} alt={`Image of ${product.productName}`} />
                            </div>
                            <div className="cart-product-details">
                                <h3>{product.productName}</h3>
                                <button className='remove-cart-btn' onClick={() => removeCart(product.productId)}>Remove from Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
