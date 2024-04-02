import React from 'react';
import Header from '../Header/Header';
import SliderImages from '../SliderImages/SliderImages';
import AboutSite from '../AboutSite/AboutSite';
import FeedBack from '../FeedBack/FeedBack.jsx';

const Home = () => {
    return (
        <div>
         <Header/>
         <SliderImages/>
         <AboutSite/>
         <FeedBack/>
        </div>
    );
};

export default Home;