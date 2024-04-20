import React from "react";
import './AboutUs.css'
import dhruv from '../../assets/picture/feedback_dhruv.png';
import Black_noBG from '../../assets/picture/Black_noBG.png';
import people from '../../assets/picture/people.jpg';
import people1 from '../../assets/picture/people1.jpg';            
const AboutUs=()=>{
    return(<>
    <div class= "aboutus">
        <h1><b>ABOUT US </b></h1>
        <div class = "conten" >
            <p class="conten-p"><strong>
                At Mak-Z.com, our mission is to democratize publishing and eCommerce one website at a time.
            </strong>
            </p>
        </div>
        <div class="informetoin">
            <p class="informetoin-p">
              We’re a hosted version of the open source software, Mak-Z. Because when you have the freedom to create, express yourself, and earn money online, the impossible becomes business as usual.
            </p>
        </div>
    </div>
    <div class="part2">
        <div style={{float:'left'}}>
        <div class="part2-1"><p>WHAT WE BELIEVE</p></div>
        <div class="part2-2"><p>Anyone can have an idea. We want you to have the power and support to get it online.</p></div>
        <div class="part2-3"><p>Better products for a better web.</p></div>
        <div class="part2-4"><p>We’re trying to create a better web. An internet you can feel good about using. A place where people and ideas come together freely and openly.</p></div>
        <div className="part2-6"><img src={people} alt="" /></div>
        <div className="part-8">Everyone has a voice.
        Ideas don’t belong behind high walls. Software and your posts shouldn’t either. We’re here to help you express yourself.</div>
        </div>
        <div className="part2-5"><img src={Black_noBG} alt="logo" /></div>
        <div className="part2-7"><img src={people1} alt="" /></div>
    </div>
    

    </>)
}
export  default AboutUs;