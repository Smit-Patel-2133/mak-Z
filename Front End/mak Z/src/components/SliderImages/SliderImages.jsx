import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './sliderImages.css'
import themeImage from '../../assets/picture/theme.png';
import { Link } from 'react-router-dom';

const SliderImages = () => {

  return (
    <div className="slider">
    <Carousel controls={false} indicators={false} interval={3000}>
      <Carousel.Item className='main'>
        <img className="d-block w-100" src={themeImage} alt="First slide" />
        <div className='content'>
          <h3>Static website generator,cerate HTML website</h3><br />
          <Link to="/editPage">
            <button>Explore Now &gt;&gt;</button>
          </Link>
        </div>
      </Carousel.Item>
      <Carousel.Item className='main'>
        <img className="d-block w-100" src={themeImage} alt="Second slide" />
        <div className='content'>
          <h3>Simplify coding with auto generator</h3><br />
          <button>Explore Now &gt;&gt;</button>
        </div>
      </Carousel.Item>
      <Carousel.Item className='main'>
        <img className="d-block w-100" src={themeImage} alt="Third slide" />
        <div className='content'>
          <h3>Speed up coding with auto-generation.</h3><br />
          <button>Explore Now &gt;&gt;</button>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default SliderImages;
