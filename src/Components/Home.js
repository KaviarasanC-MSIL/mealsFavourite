import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { Product } from './Product';
import { SearchHeader } from './SearchHeader';
import emptysearch from '../assets/emptysearch.png'

export const Home = () => {
    const [product, setProduct] = useState([]);
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
                const data = await response.json();
                const productData = data.categories.map(product => ({
                    productId: product.idCategory,
                    productName: product.strCategory,
                    productImage: product.strCategoryThumb
                }));
                setProduct(productData);
                setFilterData(productData);
            } catch (e) {
                console.error("Something went wrong", e);
            }
        };
        fetchData();
    }, []);

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm === '') {
            setFilterData(product); 
        } else {
            const filteredData = product.filter(product => product.productName.toLowerCase().includes(searchTerm));
            setFilterData(filteredData); 
        }
    };

    return (
        <>
          <SearchHeader handleSearch={handleSearch} />
          <div className='product-container'>
                {filterData.length === 0 ? (
                    <div className='empty-search'>
                        <img src={emptysearch} alt =''/>
                    <p>No Result found !!</p></div>
                ) : (
                    filterData.map((productData) => (
                        <Product key={productData.productId} product={productData} />
                    ))
                )}
            </div>
        </>
    );
};
