import React from 'react';
import Header from '../Header/Header';
import SliderImages from '../SliderImages/SliderImages';
import AboutSite from '../AboutSite/AboutSite';
import FeedBack from '../FeedBack/FeedBack.jsx';
import FetchTemplate from "../Single template/FetchTemplate.jsx";
import Templates from "../Templates/Templates.jsx";
const images = [
    {
        id: 1,
        url: 'https://th.bing.com/th/id/OIP.Us3vornr4pB02KFIC55WZwHaFF?w=2685&h=1846&rs=1&pid=ImgDetMain',
        alt: 'Image 1',
        click: "https://www.youtube.com",
        text: "this is image about lake"
    },
    {
        id: 2,
        url: 'https://www.pixelstalk.net/wp-content/uploads/2016/08/Best-Nature-Full-HD-Images-For-Desktop.jpg',
        alt: 'Image 2',
        click: "https://sites.google.com/ganpatuniversity.ac.in/oddsem2023/5sem",
        text: "this is image about waterfall"
    },
    {
        id: 3,
        url: 'https://th.bing.com/th/id/R.ae87891b3dde7b28712b75d14342f1a5?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0',
        alt: 'Image 3',
        click: "https://fast.com/",
        text: "this is image about garden"
    },
    {
        id: 4,
        url: 'https://th.bing.com/th/id/R.ae87891b3dde7b28712b75d14342f1a5?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0',
        alt: 'Image 4',
        click: "https://fast.com/",
        text: "this is image about garden"
    },
    {
        id: 5,
        url: 'https://th.bing.com/th/id/OIP.Us3vornr4pB02KFIC55WZwHaFF?w=2685&h=1846&rs=1&pid=ImgDetMain',
        alt: 'Image 5',
        click: "https://www.youtube.com",
        text: "this is image about lake"
    },
    {
        id: 6,
        url: 'https://www.pixelstalk.net/wp-content/uploads/2016/08/Best-Nature-Full-HD-Images-For-Desktop.jpg',
        alt: 'Image 6',
        click: "https://sites.google.com/ganpatuniversity.ac.in/oddsem2023/5sem",
        text: "this is image about waterfall"
    },
    {
        id: 7,
        url: 'https://th.bing.com/th/id/R.ae87891b3dde7b28712b75d14342f1a5?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0',
        alt: 'Image 7',
        click: "https://fast.com/",
        text: "this is image about garden"
    },
    {
        id: 8,
        url: 'https://th.bing.com/th/id/R.ae87891b3dde7b28712b75d14342f1a5?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0',
        alt: 'Image 8',
        click: "https://fast.com/",
        text: "this is image about garden"
    },
];
let templateHeading="sample"
const Home = () => {
    return (
        <div>
         <Header/>
         <SliderImages/>
            <FetchTemplate images={images} templateHeading={templateHeading} />
         <FeedBack/>
        </div>
    );
};

export default Home;