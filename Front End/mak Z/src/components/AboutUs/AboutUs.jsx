import React from "react";
import Header from '../Header/Header';
import './AboutUs.css'
import dhruv from '../../assets/picture/feedback_dhruv.png';
import Black_noBG from '../../assets/picture/white_noBG.png';
import people from '../../assets/picture/people.jpg';
import people1 from '../../assets/picture/people1.jpg';      
import people3 from '../../assets/picture/people3.jpg';


const AboutUs=()=>{
    return(<>
    <div>
         <Header/>
    </div>
    <div className= "aboutus">
        <h1><b>ABOUT US </b></h1>
        <div className = "conten" >
            <p className="conten-p"><strong>
                At Mak-Z.com, our mission is to democratize publishing and eCommerce one website at a time.
            </strong>
            </p>
        </div>
        <div className="informetoin">
            <p className="informetoin-p">
              We’re a hosted version of the open source software, Mak-Z. Because when you have the freedom to create, express yourself, and earn money online, the impossible becomes business as usual.
            </p>
        </div>
    </div>
    <div className="part2">
        <div className="part2-0" style={{float:'left'}}>
        <div className="part2-1"><p>WHAT WE BELIEVE</p></div>
        <div className="part2-2"><p>Anyone can have an idea. We want you to have the power and support to get it online.</p></div>
        <div className="part2-3"><p>Better products for a better web.</p></div>
        <div className="part2-4"><p>We’re trying to create a better web. An internet you can feel good about using. A place where people and ideas come together freely and openly.</p></div>
        <div className="part2-6"><img src={people} alt="" /></div>
        <div className="part2-7"><img src={people1} alt="" /></div>
        <div className="part2-12"><img src={people3} alt="" /></div>
        <div className="part2-8">Everyone has a voice.</div>
        <div className="part2-9">
        Ideas don’t belong behind high walls. Software and your posts shouldn’t either. We’re here to help you express yourself.</div>
        <div className="part2-10">Real support from real people.</div>
        <div className="part2-11">
        Customer service isn’t something we offer.It’s who we are. We call it Happiness—real support delivered by real human beings.</div>
        <div className="part2-13">You can make something that matters.</div>
        <div className="part2-14">With simple tools for designing and building your site, securely hosting it, and finding your audience, you can have a website that grows with you.</div>
        </div>
        <div className="part2-5"><img src={Black_noBG} alt="logo" /></div>
    </div>
    <div className="part3">
        <div className="part3-1"> WHO WE ARE</div>
        <div className="part3-2">We’re as diverse as the websites our customers create.</div>
        <div className="part3-3">All of us work on improving WordPress.com and the products that help our customers find new ways to do things online. At Automattic, we roll out updates almost every day, and develop other services, from WooCommerce and Jetpack to Gravatar and Simplenote, to enhance your experience on the web.</div>
    </div>

    </>)
}
export  default AboutUs;