import React from 'react';

const Review = ({review}) => {
    const {name, img, review: userReview, location} = review;
    return (
        <div className="card w-96 bg-primary text-primary-content">
  <div className="card-body">
    
    <p>{userReview}</p>
    
    <div className="card-actions justify-start">
    <img className='w-16' src={img} alt="" />
    </div>
    <div>
         <h2 className="card-title">{name}</h2>
         <h2>{location}</h2>


    </div>
  </div>
</div>
    );
};

export default Review;