import React from 'react';
import whiteLogo from '../../assets/picture/white_noBG.png';
import './Footer.css';
import axios from "axios";
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; 


const Footer = () => {

    const user = useSelector(state => state.auth);

    function newFeedback(){
        let feedback=document.getElementById('feedback').value;
        document.getElementById('feedback').value='';
        if(feedback.length<5) return;
        let email=(user.email) ? user.email : 'Mak-Z@gmail.com';
        let name=(user.name) ? user.name : 'Mak-Z';
        let profilePic=(user.profilePicture) ? user.profilePicture : '1';
        if(profilePic.length>2){
            profilePic=profilePic[profilePic.length-5];
        }
        parseInt(profilePic)
        axios.post('http://localhost:5000/addFeedbacks', {email,name,profilePic,feedback})
        .then(() => {
            alert('Thanks For your Feedbacks')
        })
        .catch(error => {
            console.error('Error in add feedback:', error);
        });
    }

    return (
        <>
            <div className='footerMain row container-fluid'>
                <div className="col-sm-3 col1">
                    <img src={whiteLogo} alt="logo" />
                    <p>Flow into growth with Mak-Z</p>
                    <ul>
                        <li><a href="https://www.instagram.com/wordpress/" target="_blank"><FontAwesomeIcon icon={faInstagram} /><FontAwesomeIcon icon={faInstagram} style={{backgroundColor:'rgb(21, 76, 123)'}}/></a></li>
                        <li><a href="https://www.instagram.com/wordpress/" target="_blank"><FontAwesomeIcon icon={faXTwitter} /><FontAwesomeIcon icon={faXTwitter} style={{backgroundColor:'rgb(21, 76, 123)'}}/></a></li>
                        <li><a href="https://www.instagram.com/wordpress/" target="_blank"><FontAwesomeIcon icon={faFacebookF} /><FontAwesomeIcon icon={faFacebookF} style={{backgroundColor:'rgb(21, 76, 123)'}}/></a></li>
                        <li><a href="https://www.instagram.com/wordpress/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /><FontAwesomeIcon icon={faLinkedinIn} style={{backgroundColor:'rgb(21, 76, 123)'}}/></a></li>
                    </ul>
                </div>
                <div className="col-sm-1 col2"></div>
                <div className="col-sm-4 col3">
                    <h1>FEEDBACK</h1>
                    <p>We highly value your feedback.</p>
                    <textarea name="feedback" id="feedback" cols="40" rows="5" placeholder='Write Your feedback here...'></textarea>
                    <br /><button onClick={newFeedback} className='feedbackSubmit'>Submit</button>
                </div>
                <div className="col-sm-3 col4">
                    <h1>Quick Links</h1>
                    <ul>
                        <li><a href="/">Landing</a></li>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/userProfile">Profile</a></li>
                        <li><a href="/templates">Template</a></li>
                        <li><a href="/aboutus">About Us</a></li>
                        <li><a href="/ContactUs">Contect Us</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Footer;
