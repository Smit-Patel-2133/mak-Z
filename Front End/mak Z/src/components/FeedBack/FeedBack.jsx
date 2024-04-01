import React, { useEffect } from 'react';
import './feedBack.css';
//import './feedBack.js';
import photo from '../../assets/picture/cssPhoto.jpeg';

function Feedback() {
    useEffect(() => {
        // Include your JavaScript file
        const script = document.createElement('script');
        script.src = './feedBack.js'; // Replace with the path to your JavaScript file
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script); // Remove the script when the component is unmounted
        };
      }, []);
  return (
    <div className="feedback">
      <img className="feedbackFront" src={photo} alt="feedback" />
      <h1>FEEDBACK</h1>
      <div className="feedbackSlider">
        <div className="mySlides">
          <div>
            <p>Hii, My name is Abhay Patel.I a student of ganpat university.I am very impressed with your work.i wish you being a great developer and richest person.very very best of luck for your future</p>
            <h6>- Mr. Abhay Patel</h6>
            <img src={photo} alt="abhay" />
          </div>
        </div>
        <div className="mySlides">
          <div>
            <p>Thank you for the create the web page. I have so many use it is very time saving webpage. </p>
            <h6>- Mr. Ayan Kamariya</h6>
            <img src={photo} alt="abhay" />
          </div>
        </div>
        <div className="mySlides">
          <div>
            <p>This website is a like developer to develop this website you work is outstanding.</p>
            <h6>- Mr. Dhruv Bhatt</h6>
            <img src={photo} alt="abhay" />
          </div>
        </div>
        <div className="mySlides">
          <div>
            <p>Hello My name is Darpan Makwana.I like to you animation.It's a mind blowing website.Keep it up.</p>
            <h6>- Mr. Darpan Makwana</h6>
            <img src={photo} alt="abhay" />
          </div>
        </div>
        <div className="mySlides">
          <div>
            <p>It's more realistic then original. It's Showing your hard work in digital world.</p>
            <h6>- Mr. Hitesh Vankar</h6>
            <img src={photo} alt="abhay" />
          </div>
        </div>
        <div className="mySlides">
          <div>
            <p>Hii Mr. Abhay Patel,I use your website its very nice and help full. I liked your web structure and animation. Its all good. keep it up. </p>
            <h6>- Mr. Pradip Makwana</h6>
            <img src={photo} alt="abhay" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
