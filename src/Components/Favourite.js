/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from 'react';
import './Favourite.css';
import { CartContext } from '../App';
import emptyfavourite from '../assets/emptycart.png'

export const Favourite = () => {
    const { cart, setCart } = useContext(CartContext);

    if (!setCart) {
        console.error("setCart is not provided in CartContext");
        return null;
    }

    const removeCart = (productId) => {
        const updatedCart = cart.filter((item) => item.productId !== productId);
        setCart(updatedCart);
    };

    return (
        <>
        <div className='favouriteContainer'>
            <h1 className='cart-heading'>Favourite Product</h1>
            {cart.length === 0 ? (<div>
                <img src={emptyfavourite} alt =''/>
                <p>No items in the cart</p>
                </div>
            ) : (
                <div className="cart-container">
                    {cart.map((product) => (
                        <div className="cart-product" key={product.productId}>
                            <div className="img">
                                <img src={product.productImage} alt="image" />
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
        </>
    );
};
