import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom'; // Import NavLink
import WLNB from '../../assets/picture/new White NO BG.png';
import l1 from "../../assets/landin images/landing image 1.png";

import './Landing.css';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white relative">
                <div className="absolute top-10 animate-fade-in">
                    <img src={WLNB} className="h-10 sm:h-20 md:h-20 lg:h-20 xl:h-20" alt="Logo" />
                </div>
                <div className="pt-20 text-center mb-3 animate-slide-up">
                    <h1 className="text-3xl pt-5 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 md:mb-8 font-semibold">
                        Tech doesn't have to feel like
                        <br className="mt-2 sm:mt-4 md:mt-6 lg:mt-8" />
                        a different language
                    </h1>
                    <h6 className="text-base sm:text-lg font-light mb-2 sm:mb-3">
                        Flow into growth with Mak-Z
                    </h6>
                    <button onClick={() => navigate('./home')} className='bg-black border-2 border-amber-400 text-amber-400 px-3 sm:px-4 py-1 sm:py-2 rounded-none mt-2 sm:mt-4 animate-pulse'>
                        Get Started
                    </button>
                </div>
                <div className="mt-10 animate-slide-up">
                    <img src={l1} alt="Landing Image" className='h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72' />
                </div>
            </div>
            {/* Add some space here */}
            <div className='pt-20'>
                <div className='w-full max-w-6xl mx-auto'>
                    <div className='flex flex-wrap justify-center'>
                        <div className="extra-div w-full sm:w-full md:w-1/2 lg:w-1/3 text-white flex flex-col justify-center items-center shadow-lg p-4 mb-4">
                            <NavLink to="#"><i className="fa-3x fa fa-desktop" aria-hidden="true"></i></NavLink>
                            <h2 className="text-lg">Effortless Website Design</h2>
                            <p className="text-sm">With Mak-Z, designing your website is a breeze. Utilize our drag-and-drop functionality to create your site and easily download the HTML code. You can also share your template or explore others' designs.</p>
                        </div>
                        <div className="extra-div w-full sm:w-full md:w-1/2 lg:w-1/3 text-white flex flex-col justify-center items-center shadow-lg p-4 mb-4">
                            <NavLink to="#"><i className="fa-3x fa fa-trophy" aria-hidden="true"></i></NavLink>
                            <h2 className="text-lg">Awesome Design</h2>
                            <p className="text-sm">Elevate your website's appearance with Mak-Z's powerful design tools. Create stunning visuals and captivating layouts that will impress your visitors and enhance user experience.</p>
                        </div>
                        <div className="extra-div w-full sm:w-full md:w-1/2 lg:w-1/3 text-white flex flex-col justify-center items-center shadow-lg p-4 mb-4">
                            <NavLink to="#"><i className="fa-3x fa fa-magic" aria-hidden="true"></i></NavLink>
                            <h2 className="text-lg">Easy to Customize</h2>
                            <p className="text-sm">Customize your website effortlessly with Mak-Z. Tailor your site to reflect your unique style and preferences using our intuitive customization options. Make changes with ease and watch your vision come to life.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-20'></div>
            <div className="Serviceffers bg-black text-white" id="servicediv">
                <div className="container headings text-center">
                    <h1 className="text-center font-weight-bold">WHAT DO WE OFFER</h1>
                    <p className="text-center text-yellow-100">At Mak-Z, we offer a range of cutting-edge services to propel your business forward. Check out our offerings below:</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-10 offset-1 offset-lg-0">
                            <div className='justify-center' >
                                <div>
                                    <h1 className="count">10,000</h1>
                                    <p>Templates</p>
                                </div>
                                <div>
                                    <h1 className="count">2500</h1>
                                    <p>Templates downloads</p>
                                </div>
                                <div>
                                    <h1 className="count">1,05,015</h1>
                                    <p>Total </p>
                                </div>
                                <div>
                                    <h1 class="count">60</h1>
                                    <p>Agent's are Working</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 servicediv">
                            <div className="row">
                                <div className="col-lg-2 col-2 service-icons">
                                    <i className="fa-3x fa fa-desktop" aria-hidden="true"></i>
                                </div>
                                <div className="col-lg-10 col-10">
                                    <h2>Website Development</h2>
                                    <p className='text-yellow-100'>Let Mak-Z handle your website development needs. From simple landing pages to complex e-commerce platforms, we've got you covered.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2 col-2 service-icons">
                                    <i className="fa-3x fa fa-wifi" aria-hidden="true"></i>
                                </div>
                                <div className="col-lg-10 col-10">
                                    <h2>Digital Marketing</h2>
                                    <p className='text-yellow-100'>Boost your online presence with our digital marketing services. From SEO to social media management, we'll help you reach your target audience.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2 col-2 service-icons">
                                    <i className="fa-3x fa fa-phone" aria-hidden="true"></i>
                                </div>
                                <div className="col-lg-10 col-10">
                                    <h2>Support 24/7</h2>
                                    <p className='text-yellow-100'> Experience unparalleled support with our 24/7 customer service team. We're here to assist you every step of the way.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default LandingPage;
