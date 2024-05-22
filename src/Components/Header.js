import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
    const [storedUsers, setStoredUsers] = useState(() => JSON.parse(localStorage.getItem("user")) || []);

    const handleSignOut = () => {
        const activeUserIndex = storedUsers.findIndex(user => user.status === 'active');
        if (activeUserIndex > -1) {
            const updatedUsers = [...storedUsers];
            updatedUsers[activeUserIndex].status = 'inactive';
            setStoredUsers(updatedUsers);
            localStorage.setItem('user', JSON.stringify(updatedUsers));
        }
        window.location.href = '/login';
    };

    const isLoggedIn = () => {
        const activeUser = storedUsers.find(user => user.status === 'active');
        return !!activeUser;
    };

    return (
        <div className='navbar'>
            <div className='logo'>FoodLogo</div>
            <ul>
                <li>
                    <Link to={"/"} >Home</Link>
                </li>
                <li>
                    <Link to={"/favourite"}>Favorite</Link>
                </li>
                {console.log(isLoggedIn())}
                {isLoggedIn() ? (
                    <li>
                        <a href="#" onClick={handleSignOut}>SignOut</a>
                    </li>
                ) : (
                    <>
                        <li>
                            <Link to={"/login"}>Login</Link>
                        </li>
                        <li>
                            <Link to={"/signup"}>Signup</Link>
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
};
