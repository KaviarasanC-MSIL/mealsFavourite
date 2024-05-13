import React from "react";
import errorpage from '../assets/errorpage.PNG'
import './NoPage.css'
import { Link } from "react-router-dom";
export const NoPage = () =>{
    return(<>
    <div className="container">
    <img src={errorpage} alt ={errorpage}/>
    </div>
    <Link to={'/'}><button className="btn-home">Back to Home</button></Link>
    
    </>);
}