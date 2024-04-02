import React from 'react';
import './feedBack.css';
import './feedBack.js';
import feedBackBd from '../../assets/picture/feedBackBg.jpeg';
import abhay from '../../assets/picture/feedback_abhay.jpg'
import ayan from '../../assets/picture/feedback_ayan.jpg'
import darpan from '../../assets/picture/feedback_darpan.jpg'
import dhruv from '../../assets/picture/feedback_dhruv.png'
import hitesh from '../../assets/picture/feedback_hitesh.jpg'
import pradip from '../../assets/picture/feedback_pradip.jpg'

function Feedback() {
  return (
    <div className="feedback">
      <img className="feedbackFront" src={feedBackBd} alt="feedback" />
      <h1>FEEDBACK</h1>
      <div className="feedbackSlider">
        <div className="mySlides">
          <div>
            <p>Hii, My name is Abhay Patel.I a student of ganpat university.I am very impressed with your work.i wish you being a great developer and richest person.very very best of luck for your future</p>
            <h6>- Mr. Abhay Patel</h6>
            <img src={abhay} alt="abhay" />
          </div>
        </div>
        <div className="mySlides">
          <div>
            <p>Thank you for the create the web page. I have so many use it is very time saving webpage. </p>
            <h6>- Mr. Ayan Kamariya</h6>
            <img src={ayan} alt="abhay" />
          </div>
        </div>
        <div className="mySlides">
          <div>
            <p>This website is a like developer to develop this website you work is outstanding.</p>
            <h6>- Mr. Dhruv Bhatt</h6>
            <img src={dhruv} alt="abhay" />
          </div>
        </div>
        <div className="mySlides">
          <div>
            <p>Hello My name is Darpan Makwana.I like to you animation.It's a mind blowing website.Keep it up.</p>
            <h6>- Mr. Darpan Makwana</h6>
            <img src={darpan} alt="abhay" />
          </div>
        </div>
        <div className="mySlides">
          <div>
            <p>It's more realistic then original. It's Showing your hard work in digital world.</p>
            <h6>- Mr. Hitesh Vankar</h6>
            <img src={hitesh} alt="abhay" />
          </div>
        </div>
        <div className="mySlides">
          <div>
            <p>Hii Mr. Abhay Patel,I use your website its very nice and help full. I liked your web structure and animation. Its all good. keep it up. </p>
            <h6>- Mr. Pradip Makwana</h6>
            <img src={pradip} alt="abhay" />
          </div>
        </div>
      </div>
    </div>
  );
}



export default Feedback;
