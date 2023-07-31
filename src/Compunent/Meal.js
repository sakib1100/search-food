import React, { useEffect, useState } from 'react';
import Foods from './Foods';


const Meal = () => {
const [search,setSearch] = useState('');
const [meal,setMeal] = useState([]);

useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => setMeal(data.meals));
},[search])


const searchFood = event => {
    setSearch(event.target.value)
}

    return (
        <div>


<div className='mt-5'>
    <h1>Find the food you want.</h1>
    <input onChange={searchFood} className='m-2' type='text' placeholder='Find food name...' />
    <br></br>
    <h3>Total Food {meal.length}</h3>

</div>

    <div className='container'>
        <div className='row'> 
    {
        meal.map((data) =><div className='col-md-4 mt-3'> <Foods
            data={data}
            key={data.idMeal}
        ></Foods></div>)
    }    
    </div>
    </div> 
            
        </div>
    );
}

export default Meal;
