import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'


import './Review.css'

const Review = (props) => {
   const {imageURL,review,name}=props.review;
    return (
       
    
        <div className="single-review">
             <div className="item-review">
                <img className='review-img' src={imageURL} alt=""/>
                <div>
                <FontAwesomeIcon className='fs-icon' icon={faStar} />
                <FontAwesomeIcon className='fs-icon' icon={faStar} />
                <FontAwesomeIcon  className='fs-icon' icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                
                   
                </div>
        
                 <p>{name}</p>
                 <p>Reviews: {review}</p>
            </div>

     </div>

        
    );
};

export default Review;