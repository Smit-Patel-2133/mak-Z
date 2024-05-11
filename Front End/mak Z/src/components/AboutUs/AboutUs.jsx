import React from "react";
import Header from '../Header/Header';
import './AboutUs.css'
import dhruv from '../../assets/picture/feedback_dhruv.png';
import abhay from '../../assets/picture/feedback_abhay.jpg';
import ak from '../../assets/picture/Adarsh.png'
import smit from '../../assets/picture/smit.jpg'
import Black_noBG from '../../assets/picture/white_noBG.png';
import people from '../../assets/picture/people.jpg';
import people1 from '../../assets/picture/people1.jpg';      
import people3 from '../../assets/picture/people3.jpg';
import working from '../../assets/picture/working.jpg';


const AboutUs=()=>{
    return (
        <>
            <Header/>
            <div className="about-us-container">
                <div className="about-us-content">
                    <h1 className='pt-20 pb-10 italic underline'>About Us</h1>
                    <div className="about-us-mission">
                        <h1 className='italic -mt-2'>At Mak-Z, our mission is to</h1>
                        <h1 className='italic -mt-2'>democratize publishing and</h1>
                        <h1 className='italic -mt-2'>eCommerce one website at a time.</h1>
                        <p>We're a hosted version of the open source software, Mak-Z. Because when you have the
                            freedom</p><p className='-mt-5'> to create, express yourself, and earn money online, the
                        impossible becomes business as usual.</p>
                    </div>
                </div>
            </div>
            <div className="custom-text-blue">
                <div className="p-5">
                    <div className="flex justify-between items-center">
                        <div className="w-1/2 ml-10">
                            <h1 className="text-3xl font-bold mb-4 text-white">
                                What We Believe
                            </h1>
                            <h4 className="text-blue-100 font-extralight text-lg">
                                We believe that anyone can bring their ideas to life online.
                            </h4>
                            <h4 className="text-lg text-blue-100 font-extralight mb-4">
                                Our mission is to empower you with the tools and support needed to create amazing
                                websites
                                without any coding experience.
                            </h4>
                            <h4 className="text-lg mb-4 text-blue-100 font-extralight">
                                With our intuitive drag-and-drop functionality, you can build a beautiful website in
                                minutes, no matter your skill level. Just pick your elements, arrange them on the
                                canvas,
                                and let us handle the rest.
                            </h4>
                            <h4 className="text-lg text-blue-100 font-extralight">
                                Whether you're a small business owner, a freelancer, or just someone with a great idea,
                                we're here to help you get online quickly and easily.
                            </h4>
                        </div>
                        <div className="w-1/2 flex justify-center">
                            <img src={Black_noBG} alt="Our Logo" className="w-3/4"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-20 bg-gray-100'></div>
            <div className="flex justify-around items-center p-4 bg-gray-100 ">
                <div className="flex flex-col items-center w-1/3 px-5">
                    <img className="h-60 w-70 mx-auto" src={people} alt="Feature 1"/>
                    <p className="mt-2 text-center text-gray-700">
                        Drag-and-drop simplicity: Build your website with an intuitive interface
                        that requires no coding skills.
                    </p>
                </div>
                <div className="flex flex-col items-center w-1/3 px-2">
                    <img className="h-60 w-70 mx-auto" src={people1} alt="Feature 2"/>
                    <p className="mt-2 text-center text-gray-700">
                        Customizable templates: Choose from a wide variety of templates
                        to create a unique look for your site.
                    </p>
                </div>
                <div className="flex flex-col items-center w-1/3 px-5">
                    <img className="h-60 w-70 mx-auto" src={people3} alt="Feature 3"/>
                    <p className="mt-2 text-center text-gray-700">
                        Built-in support: Get help from our support team
                        whenever you need it, 24/7.
                    </p>
                </div>
            </div>

            <div className="custom-text-blck">
                <div className="pt-20 pb-20">
                    <div className="flex justify-between items-center">
                        <div className="w-1/2  flex justify-center ">
                            <img src={working} alt="Our Logo" className="w-3/4 rounded-2xl"/>
                        </div>
                        <div className="w-1/2">
                            <h4 className='text-white'>WHO WE ARE</h4>
                            <h1 className='text-white'>We're as diverse as the websites our customers create.</h1>
                            <h6 className='text-blue-100 pt-2 pr-20 justify-between flex'>At Mak-Z, we're committed to building innovative products that help you achieve your online goals. Our team at Automatic works tirelessly, releasing updates almost daily to keep our platform fresh and ahead of the curve.We believe in providing seamless experiences, whether you're building a website, managing an online business, or connecting with your audience. We value user feedback and use it to guide our ongoing improvements, ensuring our products meet your needs.With each update, we aim to make your online journey smoother, easier, and more enjoyable.</h6>
                        </div>

                    </div>
                </div>
            </div>
            {/*developer section*/}
            <div className='pt-20'/>
            <div className='developer'>
                <h1 className='about-us-content'>Developers</h1>
            </div>

            <div className='dev p-4 '>
                <div className="flex justify-between items-center">
                    <div className='pl-20 w-3/6'>
                        <p className="text-lg">Name: Abhay Hingrajiya</p>

                        <p className="text-lg">GitHub: <a href="https://github.com/AbhayHingrajiya" target="_blank"
                                                          className="text-black ">github.com/AbhayHingrajiya</a>
                        </p>
                        <p className="text-lg">Email: abhayhingrajiya18@gmail.com</p>
                    </div>
                    <div className='w-3/6 flex justify-center'>
                        <img className='h-60 w-60 rounded-full' src={abhay} alt="Abhay's photo"/>
                    </div>
                </div>
            </div>
            <div className='dev p-4 bg-black '>
                <div className="flex justify-between items-center">
                    <div className='w-3/6 flex justify-center'>
                        <img className='h-60 w-60 rounded-full' src={dhruv} alt="Abhay's photo"/>
                    </div>
                    <div className='pl-20 w-3/6'>
                        <p className="text-lg text-white">Name: Dhruv Bhatt</p>

                        <p className="text-lg text-white">GitHub: <a href="https://github.com/DhruvBhatt13" target="_blank"
                                                          className="text-white ">github.com/DhruvBhatt13</a>
                        </p>
                        <p className="text-lg text-white">Email: bhattdhruv996@gmail.com</p>
                    </div>

                </div>
            </div>
            <div className='dev p-4 '>
                <div className="flex justify-between items-center">
                    <div className='pl-20 w-3/6'>
                        <p className="text-lg ">Name: Smit Patel</p>

                        <p className="text-lg">GitHub: <a href="https://github.com/Smit-Patel-2133" target="_blank"
                                                          className="text-black ">github.com/Smit-Patel-2133</a>
                        </p>
                        <p className="text-lg">Email: smitnpatel013@gmail.com</p>
                    </div>
                    <div className='w-3/6 flex justify-center'>
                        <img className='h-60 w-60 rounded-full' src={smit} alt="Abhay's photo"/>
                    </div>
                </div>
            </div>
            <div className='dev p-4 bg-black'>
                <div className="flex justify-between items-center">
                    <div className='w-3/6 flex justify-center'>
                        <img className='h-60 w-60 rounded-full' src={ak} alt="Abhay's photo"/>
                    </div>
                    <div className='pl-20 w-3/6'>
                        <p className="text-lg text-white">Name: Adarsh Loshi</p>
                        <p className="text-lg text-white">GitHub: <a href="https://github.com/AdarshhLodhi" target="_blank"
                                                          className="text-white ">github.com/AdarshhLodhi</a>
                        </p>
                        <p className="text-lg text-white">Email: adarshlodhi22@gnu.ac.in</p>
                    </div>

                </div>
            </div>


        </>
    )
        ;
};

export default AboutUs;