// LandingPage.js

import React, {useEffect, useState} from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import WLNB from '../../assets/picture/new White NO BG.png';
import l1 from "../../assets/landin images/landing image 1.png";
import axios from "axios";



const LandingPage = () => {
    const navigate = useNavigate();
    const [userCount, setUserCount] = useState(0);
    const [templateDownloadsCount, setTemplateDownloadsCount] = useState(0);
const[templateCount,setTemplateCountResponse]=useState(0)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userCountResponse = await axios.post('http://localhost:5000/api/getUserCount');
                setUserCount(userCountResponse.data.userCount);
                console.log("sddsd");

                const templateCountResponse = await axios.post('http://localhost:5000/api/getTemplateCount');
                setTemplateCountResponse(templateCountResponse.data.TemplateCount);

                const templateDownloadsCountResponse = await axios.post('http://localhost:5000/api/getTemplateDownloadsCount');
                setTemplateDownloadsCount(templateDownloadsCountResponse.data.templateDownloadsCount);




            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white relative">
                <div className="absolute top-10 animate-fade-in">
                    <img src={WLNB} className="h-10 sm:h-20 md:h-20 lg:h-20 xl:h-20" alt="Logo"/>
                </div>
                <div className="pt-20 text-center mb-3 animate-slide-up">
                    <h1 className="text-3xl pt-5 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 md:mb-8 font-semibold">
                        Tech doesn't have to feel like
                        <br className="mt-2 sm:mt-4 md:mt-6 lg:mt-8"/>
                        a different language
                    </h1>
                    <h6 className="text-base sm:text-lg font-light mb-2 sm:mb-3">
                        Flow into growth with Mak-Z
                    </h6>
                    <button onClick={() => navigate('./home')}
                            className='bg-black border-2 border-amber-400 text-amber-400 px-3 sm:px-4 py-1 sm:py-2 rounded-none mt-2 sm:mt-4 animate-pulse'>
                        Get Started
                    </button>
                </div>
                <div className="mt-10 animate-slide-up">
                    <img src={l1} alt="Landing Image" className='h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72'/>
                </div>
            </div>
            <div className='pt-20'>
                <div className='w-full max-w-6xl mx-auto'>
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 hover:shadow-black hover:z-10">
                            <div
                                className="flex flex-col justify-center items-center shadow-lg p-4 mb-4 bg-white border-none rounded-3xl transition duration-300 text-black font-bold leading-tight tracking-wider transform hover:scale-105">
                                <NavLink to="#" className="text-black">
                                    <i className="fa-3x fa fa-desktop text-cyan-400" aria-hidden="true"></i>
                                </NavLink>
                                <h2 className="text-lg text-black mt-5 mb-3">Effortless Website Design</h2>
                                <p className="text-sm text-gray-400 mb-5">With Mak-Z, designing your website is a
                                    breeze. Utilize our
                                    drag-and-drop functionality to create your site and easily download the HTML code.
                                    You
                                    can also share your template or explore others' designs.</p>
                            </div>
                        </div>

                        <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 hover:shadow-black hover:z-10">
                            <div
                                className="flex flex-col justify-center items-center shadow-lg p-4 mb-4 bg-white border-none rounded-3xl transition duration-300 text-black font-bold leading-tight tracking-wider transform hover:scale-105">
                                <NavLink to="#" className="text-black">
                                    <i className="fa-3x fa fa-trophy text-cyan-400" aria-hidden="true"></i>
                                </NavLink>
                                <h2 className="text-lg text-black mt-5 mb-3">Awesome Design</h2>
                                <p className="text-sm text-gray-400 mb-5">Elevate your website's appearance with Mak-Z's
                                    powerful design tools.
                                    Create stunning visuals and captivating layouts that will impress your visitors and
                                    enhance user experience.</p>
                            </div>
                        </div>

                        <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 hover:shadow-black hover:z-10">
                            <div
                                className="flex flex-col justify-center items-center shadow-lg p-4 mb-4 bg-white border-none rounded-3xl transition duration-300 text-black font-bold leading-tight tracking-wider transform hover:scale-105">
                                <NavLink to="#" className="text-black">
                                    <i className="fa-3x fa fa-magic text-cyan-400" aria-hidden="true"></i>
                                </NavLink>
                                <h2 className="text-lg text-black mt-5 mb-3">Easy to Customize</h2>
                                <p className="text-sm text-gray-400 mb-5">Customize your website effortlessly with
                                    Mak-Z.
                                    Tailor your site to
                                    reflect your unique style and preferences using our intuitive customization options.
                                    Make changes with ease and watch your vision come to life.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className='pt-20'></div>

            <div className="bg-f7f7f9 text-white bg-black p-5 md:p-0 mb-10">
                <div className="container text-center">
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl uppercase mb-8">WHAT DO WE OFFER</h1>
                    <p className="text-yellow-100">At Mak-Z, we offer a range of cutting-edge services to propel your
                        business forward. Check out our offerings below:</p>
                </div>
                <div className="container">
                    <div className="flex flex-col md:flex-row gap-8 pt-10">
                        {/* First Column */}
                        <div
                            className="w-full md:w-1/2 lg:w-1/2"> {/* Set width to 50% on small screens and larger screens */}
                            <div className="flex justify-center md:col-span-1 lg:col-span-1">
                                <div className="flex flex-col items-center">
                                    <div className="text-center mb-4">
                                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{userCount}</h1>
                                        <p>Total User</p>
                                    </div>
                                    <div className="text-center mb-4">
                                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{templateDownloadsCount}</h1>
                                        <p>Templates downloads</p>
                                    </div>
                                    <div className="text-center mb-4">
                                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{templateCount}</h1>
                                        <p>Templates</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Column */}
                        <div
                            className="w-full md:w-1/2 lg:w-1/2"> {/* Set width to 50% on small screens and larger screens */}
                            <div className="flex flex-col md:col-span-1 lg:col-span-1 servicediv">
                                {/* First Service */}
                                <div className="flex justify-center items-center pb-20">
                                    <i className="fa-3x fa fa-desktop text-cyan-400 pr-5" aria-hidden="true"></i>

                                    <div>
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Website
                                            Development</h2>
                                        <p className="text-yellow-100 inline-block">Let Mak-Z handle your website
                                            development needs. From simple landing pages to complex e-commerce
                                            platforms,
                                            we've got you covered.</p>
                                    </div>
                                </div>

                                {/* Second Service */}
                                <div className="flex justify-center items-center pb-20">
                                    <i className="fa-3x fa fa-wifi text-cyan-400 pr-5" aria-hidden="true"></i>

                                    <div>
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Digital
                                            Marketing</h2>
                                        <p className="text-yellow-100 inline-block">Boost your online presence with our
                                            digital marketing services. From SEO to social media management, we'll help
                                            you
                                            reach your target audience.</p>
                                    </div>
                                </div>

                                {/* Third Service */}
                                <div className="flex justify-center items-center pb-20"> {/* Add pb-20 to create space */}
                                    <i className="fa-3x fa fa-phone text-cyan-400 pr-5" aria-hidden="true"></i>

                                    <div>
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Support 24/7</h2>
                                        <p className="text-yellow-100 inline-block">Experience unparalleled support with our
                                            24/7 customer service team. We're here to assist you every step of the way.</p>
                                    </div>
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
