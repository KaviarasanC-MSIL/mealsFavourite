import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Categorydesc.css';

export const CategoryDescription = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = await response.json();
            if (data.meals && data.meals.length > 0) {
                setMeal(data.meals[0]);
            }
        };
        fetchData();
    }, [id]);

    return (
        <>
            <div className='card-container'>
                {meal && (
                    <div className='user-card'>
                        <h1>{meal.strMeal}</h1>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                        {/* <h3>Category: {meal.strCategory}</h3>
                        <h3>Area: {meal.strArea}</h3> */}
                        <p>{meal.strInstructions}</p>
                        {/* <p>Ingredients:</p>
                        <ul>
                            {Object.entries(meal)
                                .filter(([key, value]) => key.startsWith('strIngredient') && value)
                                .map(([key, value], index) => (
                                    <li key={index}>{value} - {meal[`strMeasure${key.slice(13)}`]}</li>
                                ))}
                        </ul>
                        <p>Source: <a href={meal.strSource} target="_blank" rel="noopener noreferrer">{meal.strSource}</a></p> */}
                    </div>

                )}
            </div>
        </>
    );
};
