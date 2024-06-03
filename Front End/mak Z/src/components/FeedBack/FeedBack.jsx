import React, { useEffect, useState } from 'react';
import './feedBack.css';
import axios from "axios";
import feedBackBd from '../../assets/picture/feedBackBg.jpeg';

function Feedback() {
  
  const [feedback,setFeedback] = useState(null);
  const [loding, setLoding]= useState(false);

  useEffect(()=>{
    setLoding(true);

    axios.post('http://localhost:5000/getFeedbacks')
      .then((response) => {
        setFeedback(response.data)
      })
      .catch(error => {
        console.error('Error in get Feedbacks:', error);
      });
      
      setLoding(false);
  
  },[]);
      
  let slideIndex=0;
  function showSlide(){
  let slides=document.querySelectorAll(".mySlides");
  if(slides){
    if(slideIndex != 0){
      slides[slideIndex-1].style.animation="slideActive1 2s forwards";
    }
    if(slideIndex == 0){
        slides[slides.length-1].style.animation="slideActive1 2s forwards";
        slides[slides.length-2].style.animation="slideActive2 2s forwards";
        slides[slides.length-3].style.animation="slideActive3 0s forwards";
    }else if(slideIndex == 1){
        slides[0].style.animation="slideActive1 2s forwards";
        slides[slides.length-1].style.animation="slideActive2 2s forwards";
        slides[slides.length-2].style.animation="slideActive3 0s forwards";
    }else if(slideIndex == 2){
            slides[1].style.animation="slideActive1 2s forwards";
            slides[0].style.animation="slideActive2 2s forwards";
            slides[slides.length-1].style.animation="slideActive3 0s forwards";
          }else{
            slides[slideIndex-1].style.animation="slideActive1 2s forwards";
            slides[slideIndex-2].style.animation="slideActive2 2s forwards";
            slides[slideIndex-3].style.animation="slideActive3 0s forwards";
          }
          slideIndex++;
          if(slideIndex>slides.length){
            slideIndex=1;
          }
          slides[slideIndex-1].style.animation="slideActive 2s forwards";
        }
        setTimeout(showSlide,10000);
      }

  function waitForClass(className, callback) {
    var checkInterval = setInterval(function() {
        var elements = document.getElementsByClassName(className);
        if (elements.length > 0) {
            clearInterval(checkInterval);
            callback();
        }
    }, 100);
  }
  waitForClass('mySlides', function() {
      showSlide();
  });

  return (
    <>
    { loding || feedback==null 
    ? (<p></p>) 
    : (<div className="feedback">
      <img className="feedbackFront" src={feedBackBd} alt="feedback" />
      <h1>FEEDBACK</h1>
      <div className="feedbackSlider">
        {feedback.map(feedback => (
          <div className="mySlides">
            <div>
              <p>{feedback.feedback}</p>
              <h6>- {feedback.name}</h6>
              <img src={`/src/assets/Profile picture/${feedback.profilepic}.png`} alt="abhay" />
            </div>
          </div>
        ))}
      </div>
    </div>)
  }
  </>
  );
}



export default Feedback;
