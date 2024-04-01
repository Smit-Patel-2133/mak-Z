import React from 'react';
import { useNavigate } from 'react-router-dom';
import WLNB from '../../assets/picture/new White NO BG.png';
import l1 from "../../assets/landin images/landing image 1.png";


const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white relative">
            <div className="absolute top-10 animate-fade-in ">
                <img src={WLNB} className="h-10 sm:h-20 md:h-20 lg:h-20 xl:h-20" alt="Logo" />
            </div>
            <div className="pt-20 text-center mb-3 animate-slide-up">
                <h1 className="text-3xl pt-5 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 md:mb-8 font-semibold">
                    Tech doesn't have to feel like
                    <br className="mt-2 sm:mt-4 md:mt-6 lg:mt-8" /> {/* Adjust the margin top as needed */}
                    a different language
                </h1>
                <h6 className="text-base sm:text-lg font-light mb-2 sm:mb-3">
                    Flow into growth with Mak-Z
                </h6>
                <button onClick={() => navigate('./login')} className='bg-black border-2 border-amber-400 text-amber-400 px-3 sm:px-4 py-1 sm:py-2 rounded-none mt-2 sm:mt-4 animate-pulse'>
                    Get Started
                </button>
            </div>
            <div className="mt-10 animate-slide-up">
                <img src={l1} alt="Landing Image" className='h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72' />
            </div>
        </div>
    );
}

export default LandingPage;
