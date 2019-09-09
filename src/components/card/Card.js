import React from 'react';

import './Card.css';

const Card = ({monster: {name, id, email}}) => {
  return (
    <div className='card-container'>
      <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt='Robot'/>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
