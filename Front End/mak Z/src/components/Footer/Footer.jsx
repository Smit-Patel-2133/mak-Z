import React from 'react';
import whiteLogo from '../../assets/picture/white_noBG.png';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; 


const Footer = () => {
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
                <div className="col-sm-3 col"></div>
                <div className="col-sm-3 col"></div>
                <div className="col-sm-3 col"></div>
            </div>
        </>
    );
}

export default Footer;
