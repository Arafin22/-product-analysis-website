import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
     
    const [reviews] =useReviews();
     
    return (
        <div className='reviews-parrent'>
            
            {
                reviews.map((review) => <Review 
                key={review._id}
                review={review}
                />)
            }
        </div>
    );
};

export default Reviews;