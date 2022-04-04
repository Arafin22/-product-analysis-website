import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

import image from '../../Assets/perfume.jpeg'

import './Home.css'

const Home = () => {

    const [reviews] =useReviews();
    return (
        <div>
              <div>
      <div className="container">
          <div className="row">
              
        
              <div className="col-sm-12 col-md-6 col-lg-6 col-12 ">
                  <div className="align-items-center">
                  <div className="pt-5">
                    <h2>Choose Your Perfume</h2>
                    <p>Perfumes hut is an Online Perfume Shop in Bangladesh. That Sells Original Branded Perfumes and Attar (Alcohol Free Perfumes) at The Best Price in Bangladesh.</p>
                    <button type="button" className="bg-light text-primary btn  btn-lg ">Buy Now</button>
  
  
                   
                  </div>
                  </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                  <img className="image-size img-fluid" src={image} alt=""/>
              </div>
          </div>
          
      </div>
  </div>


           
            <div className='reviews-parrent'>
            
            {
                reviews.slice(1,4).map((review) => <Review 
                key={review._id}
                review={review}
                />)
            }
        </div>
            <button className="bg-light text-primary btn  btn-lg ">
                <Link to='/reviews'> Reviews</Link>
            </button>
        </div>
    );
};

export default Home;