import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './sliderImages.css'
import themeImage from '../../assets/picture/theme.png';
import axios from "axios";
import { Link } from 'react-router-dom';

const SliderImages = () => {

  const [sliderImages,setSliderImages]= useState(null);

  useEffect(()=>{
    axios.post('http://localhost:5000/addHomeSlider',{})
      .then((res) => {
        console.log('111')
        setSliderImages(res.data)
      })
      .catch(error => {
          console.error('Error in add feedback:', error);
      });
  },[]);

  return (
    <>
    {(sliderImages) 
    ? (<div className="slider">
    <Carousel controls={false} indicators={false} interval={3000}>
      {sliderImages.map(index => (
      <Carousel.Item className='main'>
        <img className="d-block w-100" src={`data:image/png;base64,${index.templateimage}`} alt="First slide" />
        <div className='content'>
          <h3>Static website generator,cerate HTML website</h3><br />
          <Link to={`/editPage/${index.templateid}`}>
            <button>Explore Now &gt;&gt;</button>
          </Link>
        </div>
      </Carousel.Item>
      ))}
      {/* <Carousel.Item className='main'>
        <img className="d-block w-100" src={`data:image/png;base64,${sliderImages[1].templateimage}`} alt="Second slide" />
        <div className='content'>
          <h3>Simplify coding with auto generator</h3><br />
          <Link to="/editPage">
            <button>Explore Now &gt;&gt;</button>
          </Link>
        </div>
      </Carousel.Item>
      <Carousel.Item className='main'>
        <img className="d-block w-100" src={`data:image/png;base64,${sliderImages[2].templateimage}`} alt="Third slide" />
        <div className='content'>
          <h3>Speed up coding with auto-generation.</h3><br />
          <Link to="/editPage">
            <button>Explore Now &gt;&gt;</button>
          </Link>
        </div>
      </Carousel.Item> */}
    </Carousel>
    </div>)
  : (<p>Loding of slider</p>)
  }
  </>
  );
};

export default SliderImages;
