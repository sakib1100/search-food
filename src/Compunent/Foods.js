import React from 'react';

const Foods = (props) => {
    const {strMeal,strInstructions,strMealThumb} = props.data;
    return (
        <div>
            
            <div class="card w-2" style={{ width: '18rem' }}>
  <img class="card-img-top" src={strMealThumb} alt="Card image cap" />
  <div class="card-body">
    <h2 class="card-text">{strMeal}</h2>
    <p class="card-text">{strInstructions.slice(0,100)}</p>

  </div>
</div>




        </div>
    );
}

export default Foods;
