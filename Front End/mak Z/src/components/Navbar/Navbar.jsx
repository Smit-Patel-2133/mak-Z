import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/picture/Black_noBG.png'
// import logo_dark from '../../assets/logo-white.png'
// import search_icon_light from '../../assets/search-w.png'
// import search_icon_dark from '../../assets/search-b.png'
// import toogle_light from '../../assets/night.png'
// import toogle_dark from '../../assets/day.png'
import logo_dark from '../../assets/picture/white_noBG.png'
import search_icon_light from '../../assets/picture/search-w.png'
import search_icon_dark from '../../assets/picture/search-b.png'
import toogle_light from '../../assets/picture/night.png'
import toogle_dark from '../../assets/picture/day.png'

const Navbar = ({theme,setTheme}) => {

    const toggle_mode=()=>{
        theme=='light'? setTheme('dark') : setTheme('light');
    }
  return (
    <div className='navbar'>
        <img src={theme=='light'? logo_light : logo_dark} xlt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Template</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
        <div className='search-box'>
            <input type="text" placeholder='Search...' />
            <img src={theme=='light' ? search_icon_light : search_icon_dark} alt="" />
        
        </div>

        
        <img onClick={()=>{toggle_mode()}} src={theme=='light'? toogle_light : toogle_dark} alt="" className='toggle-icon' />
    </div>
  )
}

export default Navbar