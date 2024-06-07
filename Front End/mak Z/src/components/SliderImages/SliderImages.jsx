import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './sliderImages.css'
import themeImage from '../../assets/picture/new White NO BG.png';
import axios from "axios";
import { useSelector } from "react-redux";
import LoginModal from '../login/LoginModal';
import ProjectDetailsModalEdit from '../Single template/ProjectDetailsModalEdit';
import { Link } from 'react-router-dom';

const SliderImages = () => {

  const user = useSelector(state => state.auth);
  const [sliderImages,setSliderImages]= useState(null);
  const [showProjectDetailsModal, setShowProjectDetailsModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [templateDetails, setTemplateDetails] = useState(null);

  useEffect(()=>{
    axios.post('http://localhost:5000/addHomeSlider',{})
      .then((res) => {
        setSliderImages(res.data)
      })
      .catch(error => {
          console.error('Error in add feedback:', error);
      });
  },[]);

  const handleEditClick = (image) => {
    if (user.isLogedin) {
        console.log(image)
        const { id, name, visibility, type } = image;
        // Use Axios for making the POST request
        axios.post('http://localhost:5000/downloadCount', { templateId: id })
            .then(response => {
                if (response.status === 200) {
                    setShowProjectDetailsModal(true);
                    setTemplateDetails({ id, name, visibility, type });
                } else {
                    console.error('Error incrementing download count:', response.data.error);
                }
            })
            .catch(error => {
                // Handle error
                console.error('Error incrementing download count:', error);
                // Optionally, you can show an error message to the user
            });
    } else {
        setShowLoginModal(true);
    }
};

  return (
    <>
    {(sliderImages) 
      ? (<>
      <LoginModal
          show={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onLogin={() => {
              setShowLoginModal(false);
          }}
        />
        <ProjectDetailsModalEdit
            show={showProjectDetailsModal}
            onClose={() => setShowProjectDetailsModal(false)}
            templateDetails={templateDetails}
        />
      <div className="slider">
    <Carousel controls={false} indicators={false} interval={3000}>
      {sliderImages.map(index => (
      <Carousel.Item className='main'>
        <img className="d-block w-100" src={`data:image/png;base64,${index.templateimage}`} alt="First slide" />
        <div className='content'>
          <h3>Static website generator,cerate HTML website</h3><br />
          {/* <Link to={`/editPage/${index.templateid}`}> */}
            <button onClick={() => handleEditClick(index)}>Explore Now &gt;&gt;</button>
          {/* </Link> */}
        </div>
      </Carousel.Item>
      ))}
    </Carousel>
    </div></>)
  : (<div className="slider">
      <img src={themeImage} alt="logo" style={{backgroundColor:'black'}}/>
    </div>)
  }
  </>
  );
};

export default SliderImages;
