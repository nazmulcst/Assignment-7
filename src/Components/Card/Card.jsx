/* eslint-disable react/prop-types */
// import React from 'react';

const Card = ({ selector, Remaining, totalCost }) => {
  // const { name } = selector;
  return (
    <div>
      <h5>
        Credit Hour Remaining: {Remaining}<span>hr</span>
      </h5>
      <hr />
      <h4>Course Name: {selector.length}</h4>
      {selector.map((card) => (
        <li key={card.id}>{card.name}</li>
      ))}

      <h4>Total Credit Hour: {totalCost}hr</h4>
    </div>
  );
};

export default Card;