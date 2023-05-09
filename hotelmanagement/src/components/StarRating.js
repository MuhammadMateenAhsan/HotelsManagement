import React, { useState } from 'react';

const StarRating = ({ totalStars }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarClick = (selected) => {
    setSelectedStars(selected);
  };

  return (
    <div>
      {[...Array(totalStars)].map((n, i) => {
        const starValue = i + 1;
        return (
          <span
            key={i}
            onClick={() => handleStarClick(starValue)}
            style={{ cursor: 'pointer', color: selectedStars >= starValue ? 'gold' : 'gray' }}
          >
            &#9733;
          </span>
        );
      })}
      <p>You've selected {selectedStars} out of {totalStars} stars.</p>
    </div>
  );
};

export default StarRating;
