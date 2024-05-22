import React from 'react';
import './CustomPopup.css';

const CustomPopup = ({ handleClose, handleLogin }) => {
    return (
        <div className="popup-overlay">
            <div className="popup">
                <h2>Please Login</h2>
                <p>You need to login to perform this action.</p>
                <div className="popup-buttons">
                    <button onClick={handleLogin}>Login</button>
                    <button onClick={handleClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default CustomPopup;
